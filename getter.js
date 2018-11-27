// submitted by droooney

verifyInput = (input) => {
  if (/[[\]]/.test(input)) throw '"[", "]" are not allowed';
};

function getter(f) {
  const key = Math.random();
  const value = Math.random();
  const obj = {[key]: value};

  return f(obj, key) === value;
}
