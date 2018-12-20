// submitted by droooney

const {defineProperty} = Object;
/*s*/const {has} = Reflect;/*s*/
const obj = {};

function defined2(key, value) {
  try {
    defineProperty(obj, key, {value});
  } catch (e) {
    return /*s*/!has(obj, key);/*s*/
  }
}
