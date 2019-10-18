const express = require('express');
const path = require('path');
const hbs = require('hbs');
const sql = require('./utils/sql');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + "/views"));

app.use(express.static(path.join('public')));

var artPaint = [];

app.get('/', (req, res) => {

  sql.getConnection((err, connection) => {

      let query = "SELECT * FROM tbl_information";

      sql.query(query, (err, rows) => {
        connection.release();

          if (err) { return console.log(err.message) }
          var i;
            for (i = 0; i < rows.length; i++) {
                var artwork = {
                    'ID': rows[i].ID,
                    'Painting': rows[i].Painting,
                    'Artist': rows[i].Artist,
                    'Image': rows[i].Image
                }
                artPaint.push(artwork)
                console.log(artwork.Painting);
        }
          
          res.render('home', {artPaint});
    })
  })
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
  })