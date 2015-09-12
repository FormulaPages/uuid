(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.uuid = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = uuid;

  function uuid(a // placeholder
  ) {
    return a // if the placeholder was passed, return
    ? ( // a random number from 0 to 15
    a ^ // unless b is 8,
    Math.random() // in which case
     * 16 // a random number from
     >> a / 4 // 8 to 11
    ).toString(16) // in hexadecimal
    : ( // or otherwise a concatenated string:
    [1e7] + // 10000000 +
    -1e3 + // -1000 +
    -4e3 + // -4000 +
    -8e3 + // -80000000 +
    -1e11 // -100000000000,
    ).replace( // replacing
    /[018]/g, // zeroes, ones, and eights with
    uuid // random hex digits
    );
  }
});
