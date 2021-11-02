class Calc {
  constructor() {
    this.material = [
      {name: 'steel', kef: 128},
      {name: 'plastic', kef: 336},
      {name: 'wooden', kef: 28},
    ]

    this.materialInput = $('.calc__form #material');
    this.rangeInput = $('.calc__form #range');
    this.longInput = $('.calc__form #long');
    this.hitsaus = $('#hitsaus');

    this.result = $('.result__value');
  }

  switchButton = (that) => {
    this.hitsaus.children('.button').removeClass('active');

    that.addClass('active');

    this.calculate();
  }

  calculate = () => {
    const kef = this.material.find(m => m.name === this.materialInput.val())
    const hitKef = this.hitsaus.children('.active').hasClass('button-yeas') ? 13 : 1;
    const result = hitKef * (+kef.kef * +this.rangeInput.val() + +kef.kef * +this.longInput.val());

    this.result.text(result).each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: parseInt($(this).text())
      }, {
        duration: 1000,
        easing: 'swing',
        step:function (now) {
          parseInt($(this).text(Math.ceil(now)));
        }
      })
    })
  }
}

export default Calc;