// submitted by droooney

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
};

function dozen12(x) {
  return x === 'javascript is very much fun';
}
