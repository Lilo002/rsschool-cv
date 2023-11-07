document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navigation__burger'),
          overlay = document.querySelector('.navigation__overlay'),
          nav = document.querySelector('.navigation__list'),
          navItem = document.querySelectorAll('.navigation__link');

    function openNav() {
        burger.classList.add('navigation__burger_active');
        overlay.classList.add('navigation__overlay_active');
        nav.classList.add('navigation__list_active');
    }

    function closeNav() {
        burger.classList.remove('navigation__burger_active');
        overlay.classList.remove('navigation__overlay_active');
        nav.classList.remove('navigation__list_active');
    }

    function toggleNav() {
        if(burger.classList.contains('navigation__burger_active')) {
            closeNav();
        } else {
            openNav();
        }
    }

    burger.addEventListener('click', (e) => {
        const target = e.target;
        if(target.closest('.navigation__burger')) {
            toggleNav();
        }
    });

    overlay.addEventListener('click', (e) => {
        const target = e.target;
        if(target == overlay) {
            closeNav();
        }
    });

    navItem.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target.href) {
                closeNav();
                setTimeout(() => window.location.replace(e.target.href), 400);
            } else {
                closeNav();
            }
        });
    });
})