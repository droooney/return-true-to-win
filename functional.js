// submitted by droooney

function functional(f) {
  return f() && f instanceof Function && f.__proto__ !== Function.prototype;
}
