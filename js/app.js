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
