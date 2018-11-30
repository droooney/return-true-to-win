// submitted by droooney

verifyInput = (input) => {
  if (/[[]/.test(input)) throw 'Wrong usage of "["';
};

/*s*/beforeRun = () => {
  delete Reflect;
  delete Object.prototype.constructor;
  delete Object;
};/*s*/

const key = Math.random();
const value = Math.random();

function getter2(f) {
  const obj = {[key]: value};

  return f(obj, key) === value;
}
