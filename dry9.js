// droooney + IWantAmbago

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  let wrong;

  if ([...new Set(parsed.replace(/,/g,''))].some(c => [...parsed].filter(x => x === (wrong = c)).length !== 1)) {
    throw `Don't repeat yourself (wrong usage of ${JSON.stringify(wrong)})`;
  }
};

delete Proxy;

function dry9(x) {
  const values = eval(x);

  return [...Array(16)].every((_, i) => i in values && !!values[i] === (i % 2 === 0));
}
