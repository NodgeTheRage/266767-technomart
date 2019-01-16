var next = document.querySelector('.slider-arrow-right');
var previous = document.querySelector('.slider-arrow-left');
var sliders = document.querySelectorAll('.sliders .slide');
var pagination = document.querySelectorAll('.pagination-buttons .pagination-button');
var currentSlide = 0;
var paginationCurrent = 0;
var slideInterval = setInterval(nextSlide,4000);
var pause = document.querySelector('.slider-div');

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    sliders[currentSlide].className = 'slide';
    pagination[paginationCurrent].className = 'pagination-button';
    currentSlide = (n+sliders.length)%sliders.length;
    paginationCurrent = currentSlide;
    sliders[currentSlide].className = 'slide slide-show';
    pagination[paginationCurrent].className = 'pagination-button pagination-button-current';
};
next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};
pause.addEventListener("mouseover", function (){
    clearInterval(slideInterval);
});
pause.addEventListener("mouseout", function (){
    slideInterval = setInterval(nextSlide,4000);
});