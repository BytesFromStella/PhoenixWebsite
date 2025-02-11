 import { homePageView } from '../pages/views/homePageView.js';
 import { servicesPageView } from '../pages/views/servicesPageView.js';
 import { bookingPageView } from '../pages/views/bookingPageView.js';
 import { aboutPageView } from '../pages/views/aboutPageView.js';
 import { resourcePageView } from '../pages/views/resourcePageView.js';

 const routes = {
    home: homePageView,
    services: servicesPageView,
    booking: bookingPageView,
    about: aboutPageView,
    resources: resourcePageView,
};

function loadPage(){
    const path = window.location.hash.substring(1) || 'home';
    const page = routes[path] || routes['home'];
    document.getElementById('app').innerHTML = page();
    toggleMeny();
}

function setupNavLinks(){
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const hash = link.getAttribute('href').substring(1);
            window.location.hash = hash;
        });
    });
}

function init(){
    setupNavLinks();
    loadPage();
    window.addEventListener('hashchange', loadPage);
    window.addEventListener('DOMContentLoaded', loadPage);

}

init();