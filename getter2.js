// submitted by droooney

verifyInput = (input) => {
  if (/[[]/.test(input)) throw 'Wrong usage of "["';
};

const key = Math.random();
const value = Math.random();

delete Reflect;
delete Object.prototype.constructor;
delete Object;

function getter2(f) {
  const obj = {[key]: value};

  return f(obj, key) === value;
}
