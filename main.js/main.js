var prev = document.querySelector('.btn-prev'),
    next = document.querySelector('.btn-next'),
    slides = document.querySelectorAll('.slide');
dots = document.querySelectorAll('.dot');
var index = 0;

function activeSlide(n) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[n].classList.add('active');

    resetDots();
    activateDot(n);
}

function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    activeSlide(index);
};

function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    activeSlide(index);
};

next.addEventListener('click', prevSlide);
prev.addEventListener('click', nextSlide);


for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (event) => activeSlide(event.target.dataset.slideIndex))
}

function resetDots() {
    dots.forEach(dot => dot.classList.remove('active'));
}

function activateDot(n) {
    dots[n].classList.add('active');
}

setInterval(function () {
    nextSlide();
}, 3000);