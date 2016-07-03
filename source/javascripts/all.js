// This is where it all goes :)
//= require jquery
//= require slick.js.js

$(document).ready(function(){

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: ".slider-nav"
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true
  })

  $('contact_form').submit(function(e){
    e.preventDefault();
    $(this).parent().append("<p style='color:red;'>Submitted</p>")
  })

  if($(window).width() > 768 ) {
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();

      $('.navbar').css({
        'transform': 'translate(0px, ' + wScroll/2 + '%)'
      });

      $('.intro').css({
        'transform': 'translate(0px, -' + wScroll/40 + '%)'
      });

      // if( wScroll > $('.row').offset().top - ($(window).height()/1.7)){
      //   check_if_in_view();
      // }
    });
  }else {
  }

})




// function check_if_in_view() {
//   var $animation_elements = $('.animation-element');
//   var $window = $(window);
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
//
//   $.each($animation_elements, function() {
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = (element_top_position + element_height);
//
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       // $element.slideDown('slow');
//       // $element.addClass('in-view slide-right').removeClass('slide-left');
//     } else {
//       // $element.addClass('slide-left').removeClass('in-view slide-right');
//       // $element.slide('slow');
//     }
//   });
// }
