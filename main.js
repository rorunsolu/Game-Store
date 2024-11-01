import '/styles/style.scss';
import '/styles/utilities.scss';

import '/styles/navbar.scss';
import '/styles/header.scss';
import '/styles/menu.scss';

import '/styles/slider-logo.scss';
import '/styles/platform.scss';
import '/styles/featured.scss';
import '/styles/reason.scss';
import '/styles/looking.scss';
import '/styles/faq.scss';
import '/styles/testimonials.scss';
import '/styles/updates.scss';

import '/styles/footer.scss';

let openMenuBarBtn = document.getElementById('js-open-menu-btn');

openMenuBarBtn.addEventListener('click', openMenuBar);

function openMenuBar() {
    if (document.getElementById('js-menu')) return;

    let menuBar = document.createElement('div');

    menuBar.className = 'menu';
    menuBar.id = 'js-menu';

    menuBar.innerHTML = `
        
          <div class="menu-top" id="js-menu-top">

            <button class="close-menu-btn" id="js-close-menu-btn" aria-label="close menu" type="button">
              <i class="ri-close-line"></i>
            </button>

          </div>

          <div class="menu-bottom" id="js-menu-bottom">
            
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#featured">Games</a></li>
              <li><a href="#updates">News</a></li>
              <li><a href="#reason">About Us</a></li>
            </ul>

          </div>
        `;

    document.body.style.overflow = 'hidden';

    document.body.appendChild(menuBar);

    let closeMenuBarBtn = document.getElementById('js-close-menu-btn');

    closeMenuBarBtn.addEventListener('click', closeMenuBar);

    let links = menuBar.querySelectorAll('ul li a');
    links.forEach(link => {
        link.addEventListener('click', closeMenuBar);
    });

    createOverlay();
}

function closeMenuBar() {
    let menuBar = document.getElementById('js-menu');
    let overlay = document.querySelector('.menu-overlay');

    document.body.style.overflow = 'auto';

    if (menuBar) {
        menuBar.remove();
    }

    removeOverlay();
}

function createOverlay() {
    let overlay = document.createElement('div');

    overlay.className = 'menu-overlay';

    overlay.addEventListener("click", closeMenuBar);

    document.body.appendChild(overlay);
}

function removeOverlay() {
    let overlay = document.querySelector('.menu-overlay');

    if (overlay) {
        overlay.remove();
    }
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