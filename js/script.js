var navModal = document.querySelector(".navbar__modal"),
  navToggle = document.querySelector(".navbar__toggle"),
  navClose = document.querySelector(".navbar__close"),
  basketModal = document.querySelector(".page-header__basket-info-modal"),
  basketToggle = document.querySelector(".page-header__basket"),
  basketClose = document.querySelector(".page-header__basket-info-close");


window.onclick = function(event) {
  if (event.target == navModal) {
    if (navModal.classList.contains("navbar__modal--opened")) {
      navModal.classList.remove("navbar__modal--opened");
      navModal.classList.add("navbar__modal--closed");
    }
  } else if (event.target == basketModal) {
    if (basketModal.classList.contains("page-header__basket-info-modal--opened")) {
      basketModal.classList.remove("page-header__basket-info-modal--opened");
      basketModal.classList.add("page-header__basket-info-modal--closed");
    }
  }
}

navToggle.addEventListener("click", function() {
  if (navModal.classList.contains("navbar__modal--closed")) {
    navModal.classList.remove("navbar__modal--closed");
    navModal.classList.add("navbar__modal--opened");
  }
});

navClose.addEventListener("click", function() {
  if (navModal.classList.contains("navbar__modal--opened")) {
    navModal.classList.remove("navbar__modal--opened");
    navModal.classList.add("navbar__modal--closed");
  }
});

basketToggle.addEventListener("click", function() {
  if (basketModal.classList.contains("page-header__basket-info-modal--closed")) {
    basketModal.classList.remove("page-header__basket-info-modal--closed");
    basketModal.classList.add("page-header__basket-info-modal--opened");
  }
});

basketClose.addEventListener("click", function() {
  if (basketModal.classList.contains("page-header__basket-info-modal--opened")) {
    basketModal.classList.remove("page-header__basket-info-modal--opened");
    basketModal.classList.add("page-header__basket-info-modal--closed");
  }
});

$('.carousel').carousel({
  pause: true,
  interval: false
});

//Multi-Carousel
(function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // http://getbootstrap.com/javascript/#carousel
  $('#carousel123').carousel({ interval: 2000 });
  $('#carouselABC').carousel({ interval: 3600 });
}());

(function(){
  $('.carousel-showsixmoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<3;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());
