// submitted by droooney

verifyInput = (input) => {
  if (/[\d+\-*/%^&|~\\<=>{}?:$.['`"]/.test(JSON.parse(input))) throw 'Illegal characters';
  /*s*/if (/this/.test(input)) throw 'No "this" backdoor this time';/*s*/
};

beforeRun = () => {
  delete Function.prototype.constructor;
};

const hasOwn = Function.call.bind({}.hasOwnProperty);
const scope = new Proxy(Math, {
  has: _ => 1,
  deleteProperty: (t, k) => (k === 'eval' || k === 'x') && delete t[k],
  set: _ => 0,
  defineProperty: _ => 0,
  get: (t, k) => hasOwn(t, k) ? t[k] : null
});

Math.eval = eval;

function mathScope8(x) {
  Math.x = x;

  with (scope) {
    const $ = eval('(x, y) => ' + x, delete eval, delete x);

    for (let i = 0; i < 1e3; i++) {
      const num1 = floor(random() * 1e2) + 1;
      const num2 = floor(random() * 1e2) + 1;

      if ($(num1, num2) !== num1 % num2) {
        return false;
      }
    }
  }

  return true;
}
