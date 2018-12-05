// submitted by droooney

verifyInput = (input) => {
  /*s*/// no such tricks this time :)
  if (/[[]/.test(input)) throw 'Wrong usage of "["';/*s*/
};

/*s*/beforeRun = () => {
  const ownKeys = Reflect.ownKeys;

  delete Reflect;
  delete Object.prototype.constructor;
  delete Object.prototype.toSource;
  delete Object;
  delete eval;
  delete Function.prototype.constructor;
  delete Function.prototype.toSource;
  delete Function;
  delete JSON;

  ownKeys(Headers.prototype).forEach(k => delete Headers.prototype[k]);
  ownKeys(URLSearchParams.prototype).forEach(k => delete URLSearchParams.prototype[k]);

  delete Headers;
  delete URLSearchParams;
  delete Request;
  delete Response;
  delete fetch;
};/*s*/

const key = Math.random();
const value = Math.random();

function getter6(f) {
  const obj = {};

  obj[key] = value;

  return f(obj, key) === value;
}
