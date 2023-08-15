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


