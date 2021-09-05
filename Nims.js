let player = null;

let t0 = performance.now();

// check if this move is winner of looser
const checkWin = (n, move = 0) => {
  player = move % 2 == 0 ? "human" : "computer";
  if (n == 0) {
    console.log(`its a win by a ${player} in ${move}th move`);
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

let t1 = performance.now();

console.log("execution time is" + (t2 - t1));
