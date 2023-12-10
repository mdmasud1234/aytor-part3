
$(function(){
  //search show or hide start
  $('#search_show_btn').on('click', function(){
    $('#search').addClass("show");
  });
  $('#search_hide_btn').on('click', function(){
    $('#search').removeClass("show");
  });
  //search show or hide End
  //cart show or hide start
  $('.bag_show_btn').on("click", function(){
    $('#shopping').addClass('show');
  });
  $('.bag_hide_btn').on("click", function(){
    $('#shopping').removeClass('show');
  });
  //cart show or hide End
   //popup js section start 
   $('.popup_hide_btn').on("click", function(){
    $('#popup_section').fadeOut();
  });
    //popup js section End 
    //slick js start
    $('.banner_slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.banner_slider_dots_container'),
      dotsClass:'banner_slider_dots',
      autoplay:true,
      autoplaySpeed:3000,
      fade: true,
      speed:1000
    });
    //slick js End
})

