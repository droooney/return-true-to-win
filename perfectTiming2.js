// submitted by droooney

/*s*/const eval = window.eval;
const floor = Math.floor;
const random = Math.random;
const executeNTimes = (fn, n) => {
  while (n--) fn();
};/*s*/

function perfectTiming2(x) {
  /*s*/executeNTimes(() => {
    if (eval(x)) throw 'Too early';
  }, floor(random() * 1e5));/*s*/

  return eval(x);
}
