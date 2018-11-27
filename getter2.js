// submitted by droooney

verifyInput = (input) => {
  if (/[[\]]/.test(input)) throw '"[", "]" are not allowed';
};

const key = Math.random();
const value = Math.random();

delete Reflect;
delete Object.prototype.constructor;
delete Object;

function getter3(f) {
  const obj = {[key]: value};

  return f(obj, key) === value;
}
