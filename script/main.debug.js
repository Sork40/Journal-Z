
$(document).ready(function () {
  const $flipbook = $('#flipbook');

  console.log("Init turn:", typeof $flipbook.turn); // doit être "function"

  $flipbook.turn({
    width: window.innerWidth,
    height: window.innerHeight,
    autoCenter: true,
    elevation: 50,
    duration: 1000,
    gradients: true,
    when: {
      turning: function(event, page, view) {
        console.log("➡️ Turning to page:", page);
      },
      turned: function(event, page, view) {
        console.log("✅ Turned to page:", page);
      }
    }
  });

  $('#prev').click(function () {
    console.log("⬅️ Prev clicked");
    $flipbook.turn('previous');
  });

  $('#next').click(function () {
    console.log("➡️ Next clicked");
    $flipbook.turn('next');
  });

  $(window).on('resize', function () {
    $flipbook.turn('size', window.innerWidth, window.innerHeight);
  });

  // Ajouter un fond rouge temporaire à chaque page pour le debug
  $('.page').css({
    'border': '2px solid red',
    'background-color': 'rgba(255,0,0,0.1)'
  });
});
