class StageTabs {
  switchTab = (e) => {
    const current = $(e.currentTarget);
    const link = current.attr('data-link');

    $('.stage-work__tabs .tab-nav__item').removeClass('active');
    current.addClass('active');

    $('.stage-work__tabs .tab-body').removeClass('active');

    $(`.stage-work__tabs #${link}`).addClass('active');
  }
}

export default StageTabs;