let slider = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#btn1");
let arrowRight = document.querySelector("#btn2");
let current = 0;
let slideInterval;

function reset() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove("active");
    }
}

function start() {
    reset();
    slider[current].classList.add("active");
}

function slideLeft() {
    if (current === 0) {
        current = slider.length - 1;
    } else {
        current--;
    }
    reset();
    slider[current].classList.add("active");
}

function slideRight() {
    if (current === slider.length - 1) {
        current = 0;
    } else {
        current++;
    }
    reset();
    slider[current].classList.add("active");
}

function startSlideShow() {
    slideInterval = setInterval(slideRight, 5000); 
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

arrowLeft.addEventListener("click", () => {
    stopSlideShow();
    slideLeft();
    startSlideShow();
});

arrowRight.addEventListener("click", () => {
    stopSlideShow();
    slideRight();
    startSlideShow();
});

start();
startSlideShow();

function checkVisibility() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        let rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            box.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function showPrevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextItem, 3000);

const carouselContainer = document.getElementById('carousel-container');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * (items[0].clientWidth + 30); // 30 is for margin
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);

// Auto slide
setInterval(showNext, 3000); // Change slide every 3 seconds
