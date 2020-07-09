$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3,
            dots:true
        },
        1500:{
            items:5,
            dots:false
        }
    }
})


var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.next2').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})