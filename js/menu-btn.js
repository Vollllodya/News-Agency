document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const weather = document.querySelector('.weather-wrapper');
    
    menuBtn.addEventListener('click', () => {
        event.preventDefault();
        menuBtn.classList.toggle('menu-btn-active');
        mainNav.classList.toggle('main-nav-expand');
        weather.classList.toggle('weather-wrapper-menu');
    });
});