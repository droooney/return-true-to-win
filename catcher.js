// submitted by droooney

// all catcher levels were made in Chrome

verifyInput = (input) => {
  if (/throw/.test(input)) throw 'No throwing by hand';
};

const {Error, Function} = window;

Object.freeze(Error);
Object.freeze(Error.prototype);

Reflect.ownKeys(window).forEach(k => {
  try {
    const value = window[k];

    if (new value('') instanceof Error) {
      delete value.prototype.constructor;
      delete window[k];
    }
  } catch (e) {}
});

const isNative = /./.test.bind(/native/);
const test = /./.test.bind(/Cannot/);

function catcher(f) {
  if (typeof f !== 'function' || !(f instanceof Function)) {
    throw 'Only functions';
  }

  if (isNative(f)) {
    throw 'No native things';
  }

  try {
    f();
  } catch (e) {
    return e instanceof Error && test(e);
  }
}
