// Stephen Leppik + droooney

verifyInput = s => {
  const input = s;

  if (eval(input) === true || eval(`untrue2(${input})`) === true)
    throw 'Input returns true.';
}

const eval = window.eval;

function untrue2(x) {
  return x;
}
