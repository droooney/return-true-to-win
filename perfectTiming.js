// submitted by droooney

var eval = window.eval;
var rand = Math.floor(Math.random() * 1e5);

function perfectTiming(x) {
  while (~rand) {
    if (eval(x)) throw 'Too early';
    rand--;
  }

  return eval(x);
}
