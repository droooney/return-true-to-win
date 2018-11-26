// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 1)) {
    throw `Don't repeat yourself (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

function dry5(x) {
  if (typeof x !== 'string') {
    return false;
  }

  const obj = { a: { x: false } };

  eval(x)(obj);

  return obj.a.x;
}
