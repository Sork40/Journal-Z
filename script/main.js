
$(document).ready(function () {
  $('#book').turn({
    width: 800,
    height: 600,
    autoCenter: true,
  });

  $('#next').click(function () {
    $('#book').turn('next');
  });

  $('#prev').click(function () {
    $('#book').turn('previous');
  });
});
