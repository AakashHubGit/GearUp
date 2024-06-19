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