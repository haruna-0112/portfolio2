$(function () {

  $('#top-btn').click(function () {
   
    $('html, body').scrollTop(0);
  });

 
  $('.header-nav a').click(function () {
  
    var adjust = 70;
    var id = $(this).attr('href');
  
    var position = $(id).offset().top - adjust;
    
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});