// submitted by droooney

Object.freeze(Array.prototype);

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
};

const getRandomInt = () => Math.floor(Math.random() * 1e3);
const values = [...Array(1e3)].map(() => {
  return [...Array(4)].map(getRandomInt);
});
const hypot = Math.hypot;

delete Math.hypot;

function dozen(f) {
  return values.every((numbers) => f(...numbers).toFixed(5) === hypot(...numbers).toFixed(5));
}
