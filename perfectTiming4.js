// droooney + GreLI + droooney

const eval = window.eval;
const floor = Math.floor;
const random = Math.random;
const executeNTimes = (fn, n, x) => {
  while (n --> 0) fn(x);
};

function perfectTiming4(x) {
  'use strict';
  let result;

  executeNTimes(x => {
    if (eval(x)) throw 'Too early';
  }, floor(random() * 3e3), x);

  executeNTimes(x => {
    result = eval(x);
  }, 1, x);

  return result;
}
