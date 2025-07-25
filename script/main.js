$(document).ready(function () {
  $('#flipbook').turn({
    width: 800,
    height: 600,
    autoCenter: true,
    elevation: 50,
    duration: 1000,
    gradients: true,
    when: {
      turning: function(event, page, view) {
        console.log("Page tournante vers :", page);
      }
    }
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
