// submitted by droooney

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 3)) {
    throw `All characters must be repeated exactly three times (${JSON.stringify(wrong)} is not)`;
  }
};

function repeatThrice(x) {
  return eval(x) === 'hello world!';
}
