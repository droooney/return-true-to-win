// submitted by droooney

Object.freeze(Array.prototype);

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
};

const size = 10;
const getRandomInt = (upperBound = 1e3) => new Number(Math.floor(Math.random() * upperBound));
const values = [...Array(1e3)].map(() => {
  const rands = [...Array(size)].map(getRandomInt);
  const firstRand = rands[0];
  const swap = (i, j) => [rands[i], rands[j]] = [rands[j], rands[i]];
  const swaps = [];

  for (let i = 0; i < 10; i++) {
    const [i, j] = [+getRandomInt(size), +getRandomInt(size)];

    swaps.push([i, j]);
    swap(i, j);
  }

  return [rands.indexOf(firstRand), swaps];
});

function dozen5(f) {
  return values.every(([index, swaps]) => f(swaps) === index);
}
