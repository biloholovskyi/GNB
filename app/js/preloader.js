class Preloader {
  constructor() {
    this.loader = $('.preloader__loader');
    this.images = $('img');
    this.images_total_count = this.images.length;
    this.images_loaded_count = 0;
    this.percent = 0;
  }

  setProgress = () => {
    let bgList = [];

    $('div').each(function () {
      const bg = $(this).css('background-image');

      if(bg && bg !== 'none') {
        bgList.push(bg);
      }
    })

    this.images_total_count += bgList.length;

    for (let i = 0; i < this.images.length; i++) {
      let image_clone = new Image();
      image_clone.onload = this.image_loaded;
      image_clone.onerror = this.image_loaded;
      image_clone.src = this.images[i].src;
    }

    bgList.forEach(bg => {
      const bgSplit = bg.split('url(')[1].split(')')[0].split('"')[1];
      let image_clone = new Image();
      image_clone.src = bgSplit;
      image_clone.onload = this.image_loaded;
      image_clone.onerror = this.image_loaded;
    })
  }

  image_loaded = () => {
    this.images_loaded_count++;
    this.percent = (100 / this.images_total_count) * this.images_loaded_count;
    const k = 1000 - 575;
    const p = k * this.percent / 100;
    this.loader.css({
      strokeDashoffset: 1000 - p
    })

    if(this.images_loaded_count === this.images_total_count || this.images_loaded_count > this.images_total_count) {
      setTimeout(() => {
        $('.preloader').css({
          opacity: 0
        })

        setTimeout(() => {
          $('.preloader').remove();
        }, 500)
      }, 500)
    }
  }
}

export default Preloader;
