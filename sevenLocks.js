// submitted by droooney

const key = Math.random();
const value = Math.random();

function sevenLocks(obj) {
  obj[key] = value;
  Object.defineProperty(obj, key, {value});
  Object.preventExtensions(obj);
  Object.seal(obj);
  Object.freeze(obj);

  return obj[key] !== value;
}
