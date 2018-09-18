let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-right'),
    arrowRight = document.querySelector('#arrow-left'),
    current = 0; //represents what image are we ON 

// hiding everything// clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

//init slider
function startSlide() {
    reset();
    //show 1rst image
    sliderImages[0].style.display = 'block';
}

//show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//show next 
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// left arrow click
arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow click
arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();