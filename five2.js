// not ready
// submitted by droooney

verifyInput = (input) => {
  if (new Set(JSON.parse(input)).size > 5) throw 'Input must contain no more than 5 kinds of characters';
};

function five2(x) {
  return eval(x) === 'winner';
}
