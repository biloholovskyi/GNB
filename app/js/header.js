class Header {
  scrollHeader = (that) => {
    const scrollPoint = typeof that === 'number' ? that : that.scrollTop();

    const headerBlock = $('.header');
    if(scrollPoint > 300) {
      headerBlock.addClass('header--shadow');

      if(headerBlock.hasClass('main-header')) {
        headerBlock.addClass('header--content');
        $('.header__logo .logo__img').attr('src', '../media/icon/logo-color.svg');
        $('.header__origin-button').addClass('main-button--hidden');
        $('.header__scroll-button').removeClass('main-button--hidden');
      }
    } else {
      $('.main-header').removeClass('header--shadow')

      if(headerBlock.hasClass('main-header')) {
        headerBlock.removeClass('header--content');
        $('.header__logo .logo__img').attr('src', '../media/icon/logo.svg');
        $('.header__origin-button').removeClass('main-button--hidden');
        $('.header__scroll-button').addClass('main-button--hidden');
      }
    }
  }

  scrollToForm = () => {
    // if click in button on mobile menu
    if($(window).width() < 992) {
      this.toggleMobileMenu($(this));
    }

    const top = $('.main-form').offset().top - 150;
    $('body, html').animate({scrollTop: top}, 1000);
  }

  toggleMobileMenu = (that) => {
    const headerNav = $('.header .navigations');
    headerNav.toggleClass('active');

    if(headerNav.hasClass('active')) {
      $('.header__humb img').attr('src', '../media/icon/close.svg')
        .addClass('active');
    } else {
      $('.header__humb img').attr('src', '../media/icon/humb.svg')
        .removeClass('active')
    }
  }
}

export default Header;