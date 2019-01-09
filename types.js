// submitted by droooney

function types(...values) {
  return new Set(values.map(x => typeof x)).size > 6;
}
