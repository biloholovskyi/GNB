class Tools {
  constructor() {
    this.modal = $('.case-modal');
  }

  show = () => {
    this.modal.addClass('active');

    // deactivate scroll
    $('body, html').addClass('no-scroll')
  }

  switch = (e, that) => {
    e.preventDefault();

    const categorySlug = that.attr('href').split('#')[1];
    $('.tools__nav ul li.active').removeClass('active');
    that.parent('li').addClass('active');

    if(categorySlug === 'all') {
      $('.tools__item').addClass('visible');
    } else {
      $('.tools__item').removeClass('visible');
      $('.' + categorySlug).addClass('visible');
    }
  }
}

export default Tools;