
$(document).ready(function () {
  $('#book').turn({
    width: window.innerWidth,
    height: window.innerHeight,
    autoCenter: true,
    gradients: true,
    acceleration: true
  });

  $('#next').click(function () {
    $('#book').turn('next');
  });

  $('#prev').click(function () {
    $('#book').turn('previous');
  });
});
