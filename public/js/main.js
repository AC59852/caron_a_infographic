let svg1 = document.querySelector('#waypoint'),
    svg2 = document.querySelector('#waypoint1'),
    svg3 = document.querySelector('#waypoint2'),
    svg4 = document.querySelector('#waypoint3'),
    closeBtn = document.querySelector('.closeBtn'),
    container = document.querySelector('.mainCon');

var waypoint = new Waypoint({
    element: document.querySelector('#waypoint'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')

      svg1.classList.toggle('appear2');
      svg1.classList.remove("blank");
    },
    offset: -50
  });

  var waypoint1 = new Waypoint({
    element: document.querySelector('#waypoint1'),
    handler: function(direction) {
      console.log('Scrolled to waypoint 2!')

      svg2.classList.toggle('appear2');
      svg2.classList.remove("blank");
    },
    offset: -900
  });

  var waypoint2 = new Waypoint({
    element: document.querySelector('#waypoint2'),
    handler: function(direction) {
      console.log('Scrolled to waypoint 3!')

      svg3.classList.toggle('appear2');
      svg3.classList.remove("blank");
    },
    offset: -1750
  });

  var waypoint3 = new Waypoint({
    element: document.querySelector('#waypoint3'),
    handler: function(direction) {
      console.log('Scrolled to waypoint 4!')

      svg4.classList.toggle('appear2');
      svg4.classList.remove("blank");
    },
    offset: -2550
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
            popup.classList.add('appear');
            container.classList.add("hidden");
        }

    seeMoreBtns.forEach(btn => btn.addEventListener('click', fetchData));

    closeBtn.addEventListener("click", function() {
      popup.classList.remove("showPopUp");
      container.classList.remove("hidden");
    });

    popup.addEventListener("animationend", function() {
      popup.classList.remove('appear');
    });
