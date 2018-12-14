// submitted by droooney

var eval = window.eval;
var floor = Math.floor;
var random = Math.random;
/*s*/var executeNTimes = (fn, n) => {
  while (n--) fn();
};/*s*/

function perfectTiming2(x) {
  /*s*/executeNTimes(() => {
    if (eval(x)) throw 'Too early';
  }, floor(random() * 1e5));/*s*/

  return eval(x);
}
