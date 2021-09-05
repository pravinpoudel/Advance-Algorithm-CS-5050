"use strict";

var t0 = performance.now();

var winner = function winner(n) {
  if (n == 0) {
    return true;
  }

  if (n == 1) {
    return false;
  }

  return !(winner(n - 1) && winner(n - 2));
};

winner(30);
var t1 = performance.now();
console.log("time is " + (t1 - t0) + " ms");
//# sourceMappingURL=Nims.dev.js.map
