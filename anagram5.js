// submitted by droooney

verifyInput = (input) => {
  if (/\//.test(input)) throw 'No old tricks';

  const parsed = JSON.parse(`[${input}]`);

  if (parsed.length !== 2 || parsed.some(s => typeof s !== 'string')) {
    throw 'Input must contain two strings';
  }

  if (parsed[0] === parsed[1]) throw 'No equal strings';

  const secondString = [...parsed[1]];
  const wrong = c => {
    throw `The strings must be anagrams (wrong usage of ${JSON.stringify(c)})`
  };

  [...parsed[0]].forEach(c => {
    const index = secondString.indexOf(c);

    if (!~index) wrong(c);

    secondString.splice(index, 1);
  });

  if (secondString.length) wrong(secondString[0]);
};

function anagram5(x, y) {
  return eval(x) === y && eval(y) === x && x !== y;
}
