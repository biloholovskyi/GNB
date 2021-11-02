import 'normalize.css';

import Cases from "./cases";
import Header from "./header";
import AboutMap from "./about-map";
import Tools from "./tools";

$(document).ready((e) => {
  const cases = new Cases();
  const header = new Header();
  const aboutMap = new AboutMap();
  const tools = new Tools();

  (function () {
    header.scrollHeader(pageYOffset)
  }())

  // sliders
  // cases-slider
  const casesSlider = $('.cases-slider__body');
  casesSlider.length > 0 && casesSlider.owlCarousel({
    items: 3,
    margin: 24,
    dots: false,
    nav: true,
    navText: '',
    responsive: {
      0: {
        items: 2,
        dots: true
      },
      767: {
        items: 2,
        dots: false
      },
      991: {
        items: 3,
        dots: false
      }
    }
  })

  // reviews slider
  const reviewSlider = $('.reviews__body');
  reviewSlider.length > 0 && reviewSlider.owlCarousel({
    items: 3,
    margin: 24,
    dots: false,
    nav: true,
    navText: '',
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      767: {
        items: 2,
        dots: false
      },
      991: {
        items: 3,
        dots: false
      }
    }
  })

  // show mobile menu
  $('.header__humb').on('click', function() {header.toggleMobileMenu($(this))})

  // scroll to main form
  $('.btn-to-form').on('click', () => {header.scrollToForm()});

  // show case
  $('.cases__item, .cases-slider__item').on('click', cases.showCases)
  // close case or tools
  $('.case-modal .close').on('click', cases.closeCases)

  // close case modal after click on body
  $(document).on('click', function (e) {
    const caseModal = $('.case-modal .body, .cases__item, .cases-slider__item, .tools__item');
    if (!caseModal.is(e.target) && caseModal.has(e.target).length === 0) {
      cases.closeCases();
    }
  })

  // show tools
  $('.tools__item').on('click', tools.show)
  // switch category tools
  $('.tools__nav ul li a').on('click', function (e) {tools.switch(e, $(this))})

  // Switch header after scroll
  $(window).on('scroll', function () {header.scrollHeader($(this))})

  // about map
  const mapItem = $('.about-map__map path');
  mapItem.on('mousemove', (e) => aboutMap.moveInfo(e))
  mapItem.on('mouseenter', (e) => aboutMap.showInfo(e))
  mapItem.on('mouseleave', (e) => aboutMap.hiddenInfo(e))
});

$(window).resize(() => {

});