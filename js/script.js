"use strict"

const hamburger = document.querySelector('.hamburger'),
      navItem = document.querySelector('.nav__list'),
      nav = document.querySelector('.header__nav');

        navItem.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        nav.classList.remove('header__nav_active');
    });

        hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('header__nav_active');
    });


const btnTeam = document.querySelector('.team__button'),
    teamPreview = document.querySelector('.team__preview');

    btnTeam.addEventListener('click', () => {
    teamPreview.classList.toggle('team__preview-open');
    });


let link = document.getElementsByClassName("pagination__page-link");
let currentValue = 1;

function activeLink(){
    for (l of link){
        l.classList.remove('pagination__page-link--current');
    }

    event.target.classList.add('pagination__page-link--current');
    currentValue = event.target.value;
};