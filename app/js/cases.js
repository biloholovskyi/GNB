class Cases {
  constructor() {
    this.modal = $('.case-modal');
  }

  showCases = () => {
    this.modal.addClass('active');

    // deactivate scroll
    $('body, html').addClass('no-scroll')
  }

  closeCases = () => {
    this.modal.removeClass('active');

    // activate scroll
    $('body, html').removeClass('no-scroll')
  }
}

export default Cases;