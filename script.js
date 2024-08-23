const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let counter = 0;
const size = slides[0].clientWidth;

nextButton.addEventListener('click', () => {
    if (counter >= slides.length - 1) return;
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
