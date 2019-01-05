// submitted by droooney

function bind(f, ...args) {
  return f.bind.apply(f.bind, ...args)()();
}
