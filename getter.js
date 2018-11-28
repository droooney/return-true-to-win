// submitted by droooney

verifyInput = (input) => {
  if (/[[]/.test(input)) throw 'Wrong usage of "["';
};

function getter(f) {
  const key = Math.random();
  const value = Math.random();
  const obj = {[key]: value};

  return f(obj, key) === value;
}
