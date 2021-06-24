let images = [{
  url: './images/asset/image_1.jpg',
  link: 'Rostov-on-Don, Admiral',
  city: "Rostov-on-Don<br />LCD admiral",
  area: "81 m<sup>2</sup>",
  time: "3.5 months",
},{
  url: './images/asset/styles_3.png',
  link: "Sochi Thieves",
  city: "Sochi<br />Thieves",
  area: "105 m<sup>2</sup>",
  time: "4 months",
}, {
  url: './images//asset/styles_4.png',
  link: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don<br />Patriotic",
  area: "93 m<sup>2</sup>",
  time: "3 months",
}];

function initSlider() {
  if (!images || !images.length) return;
  
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLinks = document.querySelector('.projects__navigation')
  
  initImages();
  initArrows();
  initDots();
  changeLinks();
  initItems();
  changeItems();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function changeLinks() {
      images.forEach((image, index) => {
          let link = `<li class="projects__navigation-item"><a class="projects__navigation-link n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${images[index].link}</a></li>`;
          sliderLinks.innerHTML += link;
        });
        sliderLinks.querySelectorAll(".projects__navigation-link").forEach(link => {
          link.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
      }
  
  function initItems() {
      let sliderCity = document.querySelector(".city__item")
      let sliderArea = document.querySelector(".area__item")
      let sliderTime = document.querySelector(".time__item")

      let cityDiv = `<span class="projects__item__text city">${images[0].city}</span>`;
      let areaDiv = `<span class="projects__item__text">${images[0].area}</span>`;
      let timeDiv = `<span class="projects__item__text">${images[0].time}</span>`;

      sliderCity.innerHTML = cityDiv;
      sliderArea.innerHTML = areaDiv;
      sliderTime.innerHTML = timeDiv;
  }

  function changeItems(index) {
      let city = document.querySelector(".city__item")
      city.innerHTML = `<span class="projects__item__text">${images[index].city}</span>`;
  
      let area = document.querySelector(".area__item")
      area.innerHTML = `<span class="projects__item__text">${images[index].area}</span>`;
  
      let time = document.querySelector(".time__item")
      time.innerHTML = `<span class="projects__item__text">${images[index].time}</span>`;
  
  }
  function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");

      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");

      sliderLinks.querySelector(".active").classList.remove("active");
      sliderLinks.querySelector(".n" + num).classList.add("active");

      changeItems(num);
  }
}

document.addEventListener("DOMContentLoaded", initSlider);