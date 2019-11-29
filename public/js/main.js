let svg1 = document.querySelector('#waypoint'),
    svg2 = document.querySelector('#waypoint1'),
    closeBtn = document.querySelector('.closeBtn'),
    container = document.querySelector('.mainCon');

var waypoint = new Waypoint({
    element: document.querySelector('#waypoint'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')

      svg1.classList.toggle('hide');
      svg1.classList.remove("blank");
    },
    offset: 130
  });

  var waypoint1 = new Waypoint({
    element: document.querySelector('#waypoint1'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')

      svg2.classList.toggle('hide');
      svg2.classList.remove("blank");
      svg1.classList.add("blank");
    },
    offset: 200
  });

  const seeMoreBtns = document.querySelectorAll('.see-more'),
        popup     = document.querySelector('.popup');

        function buildPopover(paintingInfo, el){
          popup.querySelector('.paintDesc').textContent = `${paintingInfo.Description}`;
            popup.querySelector('.paintName').textContent = `${paintingInfo.Painting}`;
            popup.querySelector('.paintImage').src = `images/${paintingInfo.Image}.jpg`;
            popup.querySelector('.paintGenre').textContent = `${paintingInfo.Genre}`;
            popup.querySelector('.paintYear').textContent = `${paintingInfo.Year}`;
            popup.querySelector('.paintArtist').textContent = `A Piece of Art By: ${paintingInfo.Artist}`;
            }

        function fetchData(){
            let targetEl = this,
                url = `/svgData/${this.dataset.target}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate popover

                buildPopover(data, targetEl);
            })
            .catch((err) => console.log(err));
            popup.classList.add('showPopUp');
            container.classList.add("hidden");
        }

    seeMoreBtns.forEach(btn => btn.addEventListener('click', fetchData));

    closeBtn.addEventListener("click", function() {
      popup.classList.remove("showPopUp");
      container.classList.remove("hidden");
    })