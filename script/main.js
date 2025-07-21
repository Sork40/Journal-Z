
$(document).ready(function () {
  $('#flipbook').turn({
    width: window.innerWidth,
    height: window.innerHeight,
    autoCenter: true,
    elevation: 50,
    duration: 1000,
    gradients: true
  });

  $('#prev').click(function () {
    $('#flipbook').turn('previous');
  });

  $('#next').click(function () {
    $('#flipbook').turn('next');
  });

  $(window).on('resize', function () {
    $('#flipbook').turn('size', window.innerWidth, window.innerHeight);
  });
});
