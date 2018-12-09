// submitted by droooney

Object.freeze(Array.prototype);

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
};

const size = 10;
const getRandomIndex = () => Math.floor(Math.random() * size);
const values = [...Array(1e3)].map(() => {
  const objects = [...Array(size)].map(() => ({}));
  const firstObj = objects[0];
  const swap = (i, j) => [objects[i], objects[j]] = [objects[j], objects[i]];
  const swaps = [];

  for (let i = 0; i < 10; i++) {
    const [i, j] = [0, 0].map(getRandomIndex);

    swaps.push([i, j]);
    swap(i, j);
  }

  return [objects.indexOf(firstObj), swaps];
});

function dozen5(f) {
  return values.every(([index, swaps]) => f(swaps) === index);
}
