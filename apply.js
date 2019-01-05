// submitted by droooney

function apply(f, ...args) {
  return f.call.bind.apply(...args).apply();
}
