import '/styles/style.scss';

import '/styles/navbar.scss';
import '/styles/header.scss';

import '/styles/platform.scss';
import '/styles/browse.scss';
import '/styles/featured.scss';
import '/styles/looking.scss';
import '/styles/reason.scss';
import '/styles/opinions.scss';
import '/styles/updates.scss';
import '/styles/newsletter.scss';

import '/styles/accordion.scss';
import '/styles/footer.scss';


window.addEventListener('scroll',
    function () {
        document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
    });

const nav = document.querySelector('.nav__list');
const openNavButton = document.querySelector('#nav__toggle-open');
const closeNavButton = document.querySelector('#nav__toggle-close');

const openNav = function () {
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
        openNavButton.style.display = 'none';
        closeNavButton.style.display = 'inline-block';
    }

    else {
        nav.style.display = 'none';
        openNavButton.style.display = 'inline-block';
        closeNavButton.style.display = 'none';
    }
};

openNavButton.addEventListener('click', openNav);

const closeNav = function () {

    nav.style.display = 'none';

    openNavButton.style.display = 'inline-block';

    closeNavButton.style.display = 'none';
};

closeNavButton.addEventListener('click', closeNav);

if (document.body.clientWidth < 1000) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    });
}

const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;

        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }

        else {
            accordionBody.style.maxHeight = 0;
        }

    });
});