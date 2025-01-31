 import { homePageView } from './pages/homepageView.js';
 import { servicesPageView } from './pages/servicesPageView.js'
 import { bookingPageView } from './pages/bookingPageView.js'
 import { aboutPageView } from './pages/aboutPageView.js'
 import { resourcePageView } from './pages/resourcePageView.js'

 const routes = {
    home: homePageView,
    services: servicesPageView,
    booking: bookingPageView,
    about: aboutPageView,
    resources: resourcePageView,
};

function loadPage() {
    const path = window.location.hash.substring(1) || 'home';
    console.log("Navigating to:", path); // Debugging output

    if (routes[path]) {
        document.getElementById('app').innerHTML = routes[path]();
    } else {
        document.getElementById('app').innerHTML = `<h2>404 - Page Not Found</h2>`;
    }
}



// function loadPage(){
//     const path = window.location.hash.substring(1) || 'home';
//     document.getElementById('app').innerHTML = routes[path]();
// }

// window.addEventListener('hashchange', loadPage);
// window.addEventListener('DOMContentLoaded', loadPage);