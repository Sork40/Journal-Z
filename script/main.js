
window.addEventListener("load", function () {
  const flipbook = document.getElementById("flipbook");
  if (window.jQuery && typeof $('#flipbook').turn === 'function') {
    $('#flipbook').turn({
      width: window.innerWidth,
      height: window.innerHeight,
      autoCenter: true,
      elevation: 50,
      duration: 1200,
      gradients: true
    });

    document.getElementById("prev").addEventListener("click", () => {
      $('#flipbook').turn('previous');
    });

    document.getElementById("next").addEventListener("click", () => {
      $('#flipbook').turn('next');
    });

    window.addEventListener("resize", () => {
      $('#flipbook').turn("size", window.innerWidth, window.innerHeight);
    });
  } else {
    console.error("jQuery ou turn.js n'est pas chargé correctement.");
  }
});
