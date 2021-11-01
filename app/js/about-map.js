class AboutMap {
  constructor() {
    this.infoBlock = $('.about-map__info')
  }

  moveInfo = (e) => {
    this.infoBlock.css({
      left: e.clientX - 8,
      top: e.clientY + 30
    })
  }

  showInfo = () => {
    this.infoBlock.addClass('active')
  }

  hiddenInfo = () => {
    this.infoBlock.removeClass('active')
  }
}

export default AboutMap;