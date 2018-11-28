// submitted by droooney

verifyInput = (input) => {
  if (/[[]/.test(input)) throw 'Wrong usage of "["';
};

const key = Math.random();
const value = Math.random();

delete Reflect;
delete Object.prototype.constructor;
delete Object;
delete eval;
delete Function.prototype.constructor;

const {Function: Func} = window;
let a = 0;

window.__defineGetter__('Function', () => a++ || Func);

delete JSON;
delete Headers;

function getter4(f) {
  const obj = {[key]: value};

  return f(obj, key) === value;
}