// submitted by droooney

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 1)) {
    throw `There must be no repeating characters (too many ${JSON.stringify(wrong)})`;
  }
};

const ev = eval;

function noRepeat(x) {
  return ev(x) == 100 && ev(x) != 100;
}
