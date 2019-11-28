let svg1 = document.querySelector('#waypoint'),
    svg2 = document.querySelector('#waypoint1');

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
        popover     = document.querySelector('.popover');

        function buildPopover(paintingInfo, el){
            popover.querySelector('.ipa-rating').textContent = `IPA Rating: ${paintingInfo.Iparating}`;
            popover.querySelector('.ratings').textContent = `Average Rating: ${paintingInfo.ratings}`;
            popover.querySelector('.beer-description').textContent = paintingInfo.description;

            popover.classList.add('show-popover');
            el.appendChild(popover);
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
        }

    seeMoreBtns.forEach(btn => btn.addEventListener('click', fetchData));