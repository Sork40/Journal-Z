$(document).ready(function(){
  $('#flipbook').turn({
    width: window.innerWidth,
    height: window.innerHeight,
    autoCenter: true,
    elevation: 50,
    gradients: true,
    display: 'double',
    duration: 800
  });

  $('#next').click(function() {
    $('#flipbook').turn('next');
  });

  $('#prev').click(function() {
    $('#flipbook').turn('previous');
  });

  $(document).keydown(function(e) {
    if (e.key === 'ArrowRight') {
      $('#flipbook').turn('next');
    } else if (e.key === 'ArrowLeft') {
      $('#flipbook').turn('previous');
    }
  });
});
