document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer1 = document.querySelector('.carousel__container--1 .carousel__images');
  const carouselImages1 = carouselContainer1.querySelectorAll('.card');
  const carouselButtonLeft1 = document.querySelector('.carousel__button--left.carousel__button--1');
  const carouselButtonRight1 = document.querySelector('.carousel__button--right.carousel__button--1');

  const imageWidth1 = carouselImages1[0].offsetWidth + 10; // Ajouter la marge
  const containerWidth1 = carouselContainer1.offsetWidth;
  const totalImages1 = carouselImages1.length;
  let scrollPosition1 = 0;

  carouselButtonLeft1.addEventListener('click', function() {
      scrollPosition1 -= containerWidth1;
      if (scrollPosition1 < 0) {
          scrollPosition1 = (Math.ceil(scrollPosition1 / imageWidth1) * imageWidth1);
      }
      updateCarouselPosition(carouselContainer1, scrollPosition1);
  });

  carouselButtonRight1.addEventListener('click', function() {
      scrollPosition1 += containerWidth1;
      if (scrollPosition1 >= totalImages1 * imageWidth1) {
          scrollPosition1 = Math.floor(scrollPosition1 / imageWidth1) * imageWidth1;
      }
      updateCarouselPosition(carouselContainer1, scrollPosition1);
  });

  function updateCarouselPosition(carouselContainer, scrollPosition) {
      carouselContainer.scrollLeft = scrollPosition;
  }

  const carouselContainer2 = document.querySelector('.carousel__container--2 .carousel__images--2');
  const carouselImages2 = carouselContainer2.querySelectorAll('.card');
  const carouselButtonLeft2 = document.querySelector('.carousel__button--left.carousel__button--2');
  const carouselButtonRight2 = document.querySelector('.carousel__button--right.carousel__button--2');

  const imageWidth2 = carouselImages2[0].offsetWidth + 10; // Ajouter la marge
  const containerWidth2 = carouselContainer2.offsetWidth;
  const totalImages2 = carouselImages2.length;
  let scrollPosition2 = 0;

  carouselButtonLeft2.addEventListener('click', function() {
      scrollPosition2 -= containerWidth2;
      if (scrollPosition2 < 0) {
          scrollPosition2 = (Math.ceil(scrollPosition2 / imageWidth2) * imageWidth2);
      }
      updateCarouselPosition(carouselContainer2, scrollPosition2);
  });

  carouselButtonRight2.addEventListener('click', function() {
      scrollPosition2 += containerWidth2;
      if (scrollPosition2 >= totalImages2 * imageWidth2) {
          scrollPosition2 = Math.floor(scrollPosition2 / imageWidth2) * imageWidth2;
      }
      updateCarouselPosition(carouselContainer2, scrollPosition2);
  });

  const carouselContainer3 = document.querySelector('.carousel__container--3 .carousel__images');
  const carouselImages3 = carouselContainer3.querySelectorAll('.card');
  const carouselButtonLeft3 = document.querySelector('.carousel__button--left.carousel__button--3');
  const carouselButtonRight3 = document.querySelector('.carousel__button--right.carousel__button--3');
  
  const imageWidth3 = carouselImages3[0].offsetWidth + 10; // Ajouter la marge
  const containerWidth3 = carouselContainer3.offsetWidth;
  const totalImages3 = carouselImages3.length;
  let scrollPosition3 = 0;
  
  carouselButtonLeft3.addEventListener('click', function() {
      scrollPosition3 -= containerWidth3;
      if (scrollPosition3 < 0) {
          scrollPosition3 = (Math.ceil(scrollPosition3 / imageWidth3) * imageWidth3);
      }
      updateCarouselPosition(carouselContainer3, scrollPosition3);
  });
  
  carouselButtonRight3.addEventListener('click', function() {
      scrollPosition3 += containerWidth3;
      if (scrollPosition3 >= totalImages3 * imageWidth3) {
          scrollPosition3 = Math.floor(scrollPosition3 / imageWidth3) * imageWidth3;
      }
      updateCarouselPosition(carouselContainer3, scrollPosition3);
  });
  

}); //pour ajouter un carousel, changer le 3 par 4 ext et html en consq ne pas toucher au css



  
  


  function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

var heroShinker = function() {
  var hero = $('.hero-nav'),
      heroHeight = $('.hero-nav').outerHeight(true);
      $(hero).parent().css('padding-top', heroHeight);
  $(window).scroll(function() {
      var scrollOffset = $(window).scrollTop();
      if (scrollOffset < heroHeight) {
          $(hero).css('height', (heroHeight - scrollOffset));
      }
      if (scrollOffset > (heroHeight - 215)) {
          hero.addClass('fixme');
      } else {
          hero.removeClass('fixme');
      };
  });
}
heroShinker();

window.addEventListener('scroll', function() {
  var banner = document.querySelector('.banner');
  var heroNav = document.querySelector('.hero-nav');
  
  var heroNavHeight = heroNav.offsetHeight;
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > heroNavHeight) {
    banner.classList.add('show');
  } else {
    banner.classList.remove('show');
  }
});

// Fonction pour trier les cartes par distance par rapport à la position de l'utilisateur
function sortCardsByDistance(userLatitude, userLongitude) {
    const cardsContainer = document.querySelector('.carousel__images');
    const cards = Array.from(cardsContainer.getElementsByClassName('card'));
  
    cards.sort((a, b) => {
      const locationA = getLocationFromCard(a);
      const locationB = getLocationFromCard(b);
      const distanceA = calculateDistance(userLatitude, userLongitude, locationA.latitude, locationA.longitude);
      const distanceB = calculateDistance(userLatitude, userLongitude, locationB.latitude, locationB.longitude);
      return distanceA - distanceB;
    });
  
    cards.forEach(card => cardsContainer.appendChild(card));
  }
  
  // Fonction pour obtenir les coordonnées géographiques d'une carte
  function getLocationFromCard(card) {
    const latitude = parseFloat(card.getAttribute('data-latitude'));
    const longitude = parseFloat(card.getAttribute('data-longitude'));
    return { latitude, longitude };
  }
  
  // Fonction pour calculer la distance entre deux coordonnées géographiques en utilisant la formule de la distance haversine
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Rayon moyen de la Terre en kilomètres
  
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
  
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = earthRadius * c;
    return distance;
  }
  
  // Fonction pour convertir degrés en radians
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  // Appeler la fonction de tri en fournissant les coordonnées de l'utilisateur
  sortCardsByDistance(userLatitude, userLongitude);

  // Fonction pour obtenir la position de l'utilisateur
function getUserPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;
          sortCardsByDistance(userLatitude, userLongitude);
        },
        error => {
          console.log('Erreur de géolocalisation:', error);
        }
      );
    } else {
      console.log('La géolocalisation n\'est pas prise en charge par votre navigateur.');
    }
  }
  
  // Appeler la fonction pour obtenir la position de l'utilisateur
  getUserPosition();

  // Créer un géocodeur
var geocoder = new google.maps.Geocoder();

// Effectuer la requête de géocodage
geocoder.geocode({ address: 'Votre adresse' }, function(results, status) {
  if (status === 'OK') {
    // Les coordonnées se trouvent dans results[0].geometry.location
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  } else {
    console.error('Erreur de géocodage:', status);
  }
});
