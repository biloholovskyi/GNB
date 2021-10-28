import 'normalize.css';

$(document).ready((e) => {
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
});

$(window).resize(() => {

});