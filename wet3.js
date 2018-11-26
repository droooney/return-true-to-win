// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 2)) {
    throw `Write everything twice (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

function wet3(x) {
  const obj = { a: 1 };

  eval(x)(Object.freeze(obj));

  return !obj.a;
}
