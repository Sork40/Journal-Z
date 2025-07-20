$(document).ready(function(){
  $('#book').turn({
    width: '100%',
    height: '100%',
    autoCenter: true
  });

  $('#next').click(function(){
    $('#book').turn('next');
  });
  $('#prev').click(function(){
    $('#book').turn('previous');
  });
});
