// submitted by droooney

verifyInput = (input) => {
  if (/[\d+\-*/%^&|~\\<=>{}?:$]/.test(JSON.parse(input))) throw 'No math allowed';
};

const hasOwn = Function.call.bind({}.hasOwnProperty);
const Scope = new Proxy(Math, {
  has: _ => 1,
  detele: (t, k) => (k === 'eval' || k === 'x') && delete t[k],
  set: _ => 0,
  defineProperty: _ => 0,
  get: (t, k) => hasOwn(t, k) ? t[k] : null
});

Math.eval = eval;

function scope(x) {
  Math.x = x;

  with (Scope) {
    const $ = eval('x => ' + x, delete eval, delete x);

    for (let i = 0; i < 1e3; i++) {
      const num = floor(random() * 1e3) + 1;

      if ($(num) !== num * (num + 1) / 2) {
        return false;
      }
    }
  }

  return true;
}
