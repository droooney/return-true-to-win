// submitted by droooney

Object.freeze(Array.prototype);

beforeRun = () => {
  delete eval;
  delete Function.prototype.constructor;
  delete Function;
};

const ev = eval;
const operators = ['+', '-', '*'];
const getRandomOp = () => operators[Math.floor(Math.random() * 3)];
const getRandomInt = () => Math.floor(Math.random() * 1e3);

const values = [...Array(1e3)].map(() => {
  const [rand1, rand2] = [getRandomInt(), getRandomInt()];
  const op = getRandomOp();

  const expression = `${rand1} ${op} ${rand2}`;
  const value = ev(expression);

  return [expression, value];
});

function funMath(f) {
  return values.every(([expression, value]) => f(expression) === value);
}
