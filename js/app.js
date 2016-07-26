$(document).foundation();



flowplayer(function(api){
    $('#chapter1').on('click', function() {
      api.seek(90.5);
      api.play();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $('#chapter2').on('click', function() {
      api.seek(340);
      api.play();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $('#chapter3').on('click', function() {
      api.seek(526);
      api.play();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $('#chapter4').on('click', function() {
      api.seek(801);
      api.play();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $('#chapter5').on('click', function() {
      api.seek(1023);
      api.play();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});

$(document).ready(function() {
  $(".owl-slider").owlCarousel();
  $(".top-channel-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      singleItem:true,
      autoPlay: 7000,
      stopOnHover: true,
      rewindSpeed: 3000,
      paginationSpeed: 3000
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
});
