class Header {
  scrollHeader = (that) => {
    const headerBlock = $('.header');

    if(that.scrollTop() > 300) {
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
}

export default Header;