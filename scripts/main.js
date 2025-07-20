$(document).ready(function(){
  $('#flipbook').turn({
    width: $('#flipbook').width(),
    height: $('#flipbook').height(),
    autoCenter: true,
    gradients: true,
    acceleration: true,
    elevation: 50,
    duration: 1200
  });
});
