// submitted by droooney

verifyInput = (input) => {
  if (/[[]/.test(input)) throw 'Wrong usage of "["';
};

const key = Math.random();
const value = Math.random();

function getter(f) {
  const obj = {[key]: value};

  return f(obj, key) === value;
}
