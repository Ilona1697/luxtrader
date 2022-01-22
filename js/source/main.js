"use strict";
/* HEADER MENU BURGER */
let iconMenu = document.querySelector('.icon-menu');
let bodyMenu = document.querySelector('.menu__body');
iconMenu.addEventListener('click', function(){
    this.classList.toggle('active');
    bodyMenu.classList.toggle('active');
});
/* /HEADER MENU BURGER */

/* HOME SLIDER */
let slides = document.querySelectorAll('.home__slider .slider-item');
let leftBtn = document.querySelector('.slider-btn__left');
let rightBtn = document.querySelector('.slider-btn__right');
let countOfHomeSlider = 0;
leftBtn.addEventListener('click', function(){
    removeClass(slides);
    if(countOfHomeSlider == 0){
        countOfHomeSlider = slides.length - 1;
        slides[countOfHomeSlider].classList.add('active');
    }else{
        countOfHomeSlider--;
        slides[countOfHomeSlider].classList.add('active');
    } 
});
rightBtn.addEventListener('click', function(){
    removeClass(slides);
    if(countOfHomeSlider == slides.length - 1){
        countOfHomeSlider = 0;
        slides[countOfHomeSlider].classList.add('active');
    }else{
        countOfHomeSlider++;
        slides[countOfHomeSlider].classList.add('active');
    }   
});
let timerSlider = setInterval(function(){
    removeClass(slides);
    if(countOfHomeSlider == slides.length){
        countOfHomeSlider = 0;
    }
    slides[countOfHomeSlider].classList.add('active');

    countOfHomeSlider++;
    if(countOfHomeSlider == slides.length){
        countOfHomeSlider = 0;
    }
}, 3000);
/* /HOME SLIDER */

/* TYPE OF DEVICE */
let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if(isMobile.any()){
    document.querySelector('body').classList.add('touch');
    let userBtn = document.querySelector('.user__inner');
    let regionBtn = document.querySelector('.header__region');
    let userNav = document.querySelector('.user-nav');
    let regionNav = document.querySelector('.region-nav');
    let userSubNav = document.querySelector('.user-subnav__list');
    let arrow = document.querySelector('.user-nav__arrow');
    let linkBtn = document.querySelector('.user-nav__regions');
    regionBtn.addEventListener('click', function(){
        regionNav.classList.toggle('active');
        userNav.classList.remove('active');
    });
    userBtn.addEventListener('click', function(){
        userNav.classList.toggle('active');
        regionNav.classList.remove('active');
    });
    linkBtn.addEventListener('click', function(e){
        e.preventDefault();
        userSubNav.classList.toggle('active');
        arrow.classList.toggle('active');
    });
}else{
    document.querySelector('body').classList.add('mouse');
}

/* /TYPE OF DEVICE */

/* QUOTES SLIDER */
let quotesElems = document.querySelectorAll('.quotes__elem');
let quotesBtn = document.querySelector('.quotes__bottom');
let quotesIcon = document.querySelector('.quotes__icon');
let countOfQuotesSlider = 0;

quotesBtn.addEventListener('click', function(){
    quotesIcon.classList.add('active');
    removeClass(quotesElems);
    if(countOfQuotesSlider == slides.length - 1){
        countOfQuotesSlider = 0;
        quotesElems[countOfQuotesSlider].classList.add('active');
    }else{
        countOfQuotesSlider++;
        quotesElems[countOfQuotesSlider].classList.add('active');
    } 
    setTimeout(function(){
        quotesIcon.classList.remove('active');  
    }, 500);
});

/* /QUOTES SLIDER */

let removeClass = (arr) =>{
    for(let slide of arr){
		slide.classList.remove('active');
    }
}