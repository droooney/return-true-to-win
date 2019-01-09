// submitted by droooney

const eval = window.eval;
const floor = Math.floor;
const random = Math.random;
const executeNTimes = (fn, n, x) => {
  while (n --> 1) fn(x);
  try { fn(x) } catch (e) {}
};

function perfectTiming5(x) {
  let result;

  executeNTimes(x => {
    if (result = eval(x)) throw 'Too early';
  }, floor(random() * 3e3) + 1, x);

  return result;
}
