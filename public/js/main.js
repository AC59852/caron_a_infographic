var waypoint = new Waypoint({
    element: document.querySelector('#waypoint'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      let svg = this.element.firstElementChild.contentDocument;

      svg.querySelector("#finestText").classList.toggle('yellow');
    },
    offset: 400
  });

  const seeMoreBtns = document.querySelectorAll('.see-more'),
        popover     = document.querySelector('.popover');

        function buildPopover(beerdata, el){
            popover.querySelector('.ipa-rating').textContent = `IPA Rating: ${beerdata.IpaRating}`;
            popover.querySelector('.ratings').textContent = `Average Rating: ${beerdata.ratings}`;
            popover.querySelector('.beer-description').textContent = beerdata.description;

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