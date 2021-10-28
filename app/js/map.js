$(document).ready(function () {

    
  // let windowWidth = $(window).width();
  // let containerWidth = $('.m-container').width();
  // let wrapper = $('.contact-page__wrapper').width();
  // let mapWidth = windowWidth - ((windowWidth - containerWidth) / 2 + wrapper);


});
ymaps.ready(init);
function init(){
var myMap = new ymaps.Map("map", {
center: [34.035934, -117.856225],
zoom: 15
});

myMap.behaviors.disable(['drag', 'scrollZoom', 'dblClickZoom','zoomControl']);

myMap.controls
.remove('trafficControl')
.remove('fullscreenControl')
.remove('rulerControl')
.remove('typeSelector')
.remove('searchControl')
// .remove('zoomControl')
.remove('geolocationControl'); 

var myPin = new ymaps.Placemark([34.035934, -117.856225],  
{
  balloonContentHeader: '',
  balloonContentBody: '',
  balloonContentFooter: '',
  hintContent: ''
},
{
  iconLayout: 'default#image',
  
  iconImageHref: './media/icon/pin2.png',
  iconImageSize: [28, 40],
  iconImageOffset: [0, 0]
});

myMap.geoObjects.add(myPin);

}