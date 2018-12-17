// submitted by droooney

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
  /*s*/if (/\\/.test(input)) throw 'No cheaty backdoors';/*s*/
};

function dozen13(x) {
  return x === 'javascript is very much fun';
}
