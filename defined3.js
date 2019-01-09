// submitted by droooney

const {defineProperty} = Object;
/*s*/const {has} = Reflect;/*s*/
const obj = {};

function defined3(key, value) {
  try {
    defineProperty(obj, key, /*s*/{__proto__: null, value}/*s*/);
  } catch (e) {
    return /*s*/!has(obj, key);/*s*/
  }
}
