// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 3)) {
    throw `Write everything three times (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

function wett(x) {
  return eval(x) === 'hello world!';
}
