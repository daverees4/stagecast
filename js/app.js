$(document).foundation();

flowplayer(function(api, root){
    $('#chapter1').on('click', function() {
      api.seek(90.5);
      api.play();
    });
    $('#chapter2').on('click', function() {
      api.seek(340);
      api.play();
    });
    $('#chapter3').on('click', function() {
      api.seek(526);
      api.play();
    });
    $('#chapter4').on('click', function() {
      api.seek(801);
      api.play();
    });
    $('#chapter5').on('click', function() {
      api.seek(1023);
      api.play();
    });
})