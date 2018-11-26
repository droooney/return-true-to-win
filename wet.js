// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 2)) {
    throw `Write everything twice (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

function wet(x) {
  return eval(x) === 'hello world!';
}
