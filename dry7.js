// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 1)) {
    throw `Don't repeat yourself (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

function dry7(x) {
  if (typeof x !== 'string') {
    return false;
  }

  const obj = { a: { x: [{ z: false }] } };

  eval(x)(obj);

  return Object.keys(obj.a.x[0]).length > 1 && obj.a.x[0].z;
}
