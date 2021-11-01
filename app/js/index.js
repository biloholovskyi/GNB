import 'normalize.css';

import Cases from "./cases";
import Header from "./header";

$(document).ready((e) => {
  const cases = new Cases();
  const header = new Header();

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
    navText: ''
  })

  // show mobile menu
  $('.header__humb').on('click', function () {
    const headerNav = $('.header .navigations');
    headerNav.toggleClass('active');

    if(headerNav.hasClass('active')) {
      $(this).children('img').attr('src', '../media/icon/close.svg')
        .addClass('active');
    } else {
      $(this).children('img').attr('src', '../media/icon/humb.svg')
        .removeClass('active')
    }
  })

  // show case
  $('.cases__item, .cases-slider__item').on('click', cases.showCases)
  // close case
  $('.case-modal .close').on('click', cases.closeCases)

  // close case modal after click on body
  $(document).on('click', function (e) {
    const caseModal = $('.case-modal .body, .cases__item, .cases-slider__item');
    if (!caseModal.is(e.target) && caseModal.has(e.target).length === 0) {
      cases.closeCases();
    }
  })

  // Switch header after scroll
  $(window).on('scroll', function () {header.scrollHeader($(this))})
});

$(window).resize(() => {

});