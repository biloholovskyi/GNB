class Cases {
  showCases = () => {
    $('.cases .cases__more').addClass('active');

    // deactivate scroll
    $('body, html').addClass('no-scroll')
  }

  closeCases = () => {
    $('.cases .cases__more').removeClass('active');

    // activate scroll
    $('body, html').removeClass('no-scroll')
  }
}

export default Cases;