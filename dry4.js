// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed)].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 1)) {
    throw `Don't repeat yourself (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

const ev = eval;

function dry4(x) {
  const object = { a: 1 };

  eval(x)(object);

  return !object.a;
}

