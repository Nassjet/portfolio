/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var map = L.map('map').setView([51.505, -0.09], 13);

});

function map() {
    console.log('inside carte')
    const jussieu = {
        lat:48.847335,
        long:2.356439
    }

    const zoomLevel = 16;

    const carte = L.map('map').setView([jussieu.lat, jussieu.long],zoomLevel);

    const mainLayer= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    mainLayer.addTo(carte)

    var markerCFA = L.marker([jussieu.lat, jussieu.long]).addTo(carte);
    markerCFA.bindPopup("<b>Je serai là !</b><br>").openPopup();
}

map()

// function fluxRSS() {
//     // Initialisation de FeedEk
//     $('#rssFeed').FeedEk({
//         FeedUrl : 'https://jquery-plugins.net/rss',
//         MaxCount : 5,
//         ShowDesc : true,
//         ShowPubDate:true,
//         DescCharacterLimit:100,
//         TitleLinkTarget:'_blank',
//         DateFormat : 'MM/dd/yyyy',
//         DateFormatLang : 'en',
//         Offset: 5,
//         ShowAuthor: true,
//         AuthorLabel:"Author:",
//         Success: function (feedItems) { },
//         Error: function (error) { }
//         });
// }

// fluxRSS();

// // Attendez que le chargement de la page soit terminé
// window.addEventListener('load', function() {
//     // Récupérez l'élément contenant Dark Vador
//     var vaderElement = document.getElementById('vader');

//     // Masquez l'élément contenant Dark Vador
//     vaderElement.style.display = 'none';
// });


