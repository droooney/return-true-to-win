// submitted by droooney

const {defineProperty} = Object;
const obj = {};

function defined(key, value) {
  try {
    defineProperty(obj, key, {value});
  } catch (e) {
    return true;
  }
}
