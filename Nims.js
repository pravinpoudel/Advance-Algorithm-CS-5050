let t0 = performance.now();

const winner = (n) => {
  if (n == 0) {
    return true;
  }
  if (n == 1) {
    return false;
  }
  return !(winner(n - 1) && winner(n - 2));
};

winner(30);

let t1 = performance.now();

console.log("time is " + (t1 - t0) + " ms");
