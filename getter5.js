// submitted by droooney

verifyInput = (input) => {
  if (/[]/.test(input)) throw 'Wrong usage of "["';
};

/*s*/beforeRun = () => {
  delete Reflect;
  delete Object.prototype.constructor;
  delete Object.prototype.toSource;
  delete Object;
  delete eval;
  delete Function.prototype.constructor;
  delete Function.prototype.toSource;
  delete Function;
  delete JSON;
  delete Headers.prototype.constructor;
  delete Headers.prototype.get;
  delete Headers.prototype.set;
  delete Headers;
  delete URLSearchParams.prototype.constructor;
  delete URLSearchParams.prototype.get;
  delete URLSearchParams.prototype.set;
  delete URLSearchParams;
};/*s*/

const key = Math.random();
const value = Math.random();

function getter5(f) {
  const obj = {[key]: value};

  return f(obj, key) === value;
}
