// submitted by droooney

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
};

const rand = Math.random();

function dozen3(x) {
  return x === rand || (x => x === 123 && (x => x === 456 && (x => x === 789 && rand)));
}
