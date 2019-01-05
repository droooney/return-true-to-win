// submitted by droooney

const obj = {};

function call(f, ...args) {
  return f.call(obj).bind.apply(...args).call`${obj}`.call(obj).bind().bind.apply(...args).call() === obj;
}
