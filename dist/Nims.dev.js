"use strict";

var player = null;
var t0 = performance.now(); // check if this move is winner of looser

var checkWin = function checkWin(n) {
  var move = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  player = move % 2 == 0 ? "human" : "computer";

  if (n == 0) {
    console.log("its a win by a ".concat(player, " in ").concat(move, "th move"));
    return true;
  } else {
    move++;

    if (n == 1 || n == 2) {
      return checkWin(n - 1, move);
    }

    if (n % 3 == 0) {
      return checkWin(n - 2, move);
    }

    if (n % 3 == 2) {
      return checkWin(n - 1, move);
    }

    if (n % 3 == 1) {
      return checkWin(n - 2, move);
    }
  }
};

checkWin(6, 0);
var t1 = performance.now();
console.log("execution time is" + (t2 - t1));
//# sourceMappingURL=Nims.dev.js.map
