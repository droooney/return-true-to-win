// submitted by droooney

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if (Array.from(new Set(parsed)).some(c => [...parsed].filter(x => x === (wrong = c)).length !== 2)) {
    throw `All characters must be repeated exactly twice (${JSON.stringify(wrong)} is not)`;
  }
};

function repeatTwice(x) {
  return eval(x) === 'hello world!';
}
