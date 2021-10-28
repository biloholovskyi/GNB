$(document).ready(function(){
  $('.Drop').on('click', function(){
    $(this).children('.dropdown-menu').toggleClass('active');
    $(this).toggleClass('active');
    $(this).children('button').find('.plus').toggleClass('active');
    $(this).children('button').find('.minus').toggleClass('active');
  });


});