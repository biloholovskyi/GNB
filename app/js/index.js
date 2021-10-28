import 'normalize.css';

import Cases from "./cases";

$(document).ready((e) => {
  const cases = new Cases();

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
  $('.cases__item .case-text .more-btn').on('click', cases.showCases)
  // close case
  $('.cases .cases__more .close').on('click', cases.closeCases)

  // close case modal after click on body
  $(document).on('click', function (e) {
    const caseModal = $('.cases .cases__more .body, .cases__item .more-btn');
    if (!caseModal.is(e.target) && caseModal.has(e.target).length === 0) {
      cases.closeCases();
    }
  })
});

$(window).resize(() => {

});