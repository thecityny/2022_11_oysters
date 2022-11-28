(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.interactive = factory());
})(this, (function () { 'use strict';

  var main = {};

  var $$1 = function (s) {
    let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return Array.prototype.slice.call(d.querySelectorAll(s));
  };

  $$1.one = function (s) {
    let d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return d.querySelector(s);
  };

  var qsa = $$1;

  var $ = qsa;
  var blocks = $("section.slide").reverse();
  var current = null;

  function update() {
    for (var block of blocks) {
      var bounds = block.getBoundingClientRect();

      if (bounds.top < window.innerHeight * .85) {
        if (current) {
          if (current == block) return;
          blocks.forEach(b => b.classList.remove("exiting"));
          current.classList.remove("active", "entering");
          current.classList.add("exiting");
        }

        current = block;
        current.classList.remove("exiting");
        current.classList.add("active", "entering");
        var index = blocks.indexOf(block);
        var lazy = [-1, 0, 1, 2].map(n => blocks[index + n]).filter(b => b);

        for (var section of lazy) {
          var items = section.querySelectorAll("[data-src]");

          for (var item of items) {
            item.src = item.dataset.src;
            item.removeAttribute("data-src");
          }
        }

        return;
      }
    }
  }

  window.addEventListener("scroll", update);
  update();

  return main;

}));

//# sourceMappingURL=./app.js.map