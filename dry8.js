// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 1)) {
    throw `Don't repeat yourself (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

function dry8(x) {
  return eval(x) == 'tricky now';
}
