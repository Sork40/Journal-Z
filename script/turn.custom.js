var isTouch=false;

/*! turn.js - 4.1.0 | (c) 2012 Emmanuel Garcia | turnjs.com | MIT License */
(function($) {
  'use strict';
  $.isTouch = 'ontouchstart' in window;
  $.fn.turn = function(options) {
    return this.each(function() {
      var $this = $(this);
      if (!$this.data('turn')) {
        $this.data('turn', new Turn(this, options));
      }
    });
  };
  function Turn(el, options) {
    this.el = el;
    this.options = $.extend({}, options);
    this.init();
  }
  Turn.prototype.init = function() {
    $(this.el).addClass('turn-page');
  };
})(jQuery);
