// submitted by droooney

function proto2(constructor, instance) {
  return instance.__proto__ === constructor.prototype && !(instance instanceof constructor);
}
