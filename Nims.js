let player = null;
let totalStone = 21;
// check if this move is winner of looser
const checkWin = (n, move = 0) => {
  player = "human" ? move % 2 == 0 : "computer";
  if (n == 0) {
    console.log(`its a win by a ${player} in ${move}th move`);
    return true;
  } else {
    move++;
    if (n % 3 == 0) {
      return checkWin(n - 2, move);
    }

    if (n == 1 || n % 2 == 0 || n % 2 == 1) {
      return checkWin(n - 1, move);
    }
  }
};

checkWin(6, 0);
