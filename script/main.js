window.addEventListener("load", function () {
  if (window.jQuery && typeof $('#flipbook').turn === 'function') {
    $('#flipbook').turn({
      width: 922,
      height: 600,
      autoCenter: true,
      gradients: true,
      elevation: 50,
      duration: 1500
    });
  } else {
    console.error("jQuery ou turn.js n'est pas chargé correctement.");
  }
});
