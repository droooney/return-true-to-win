// submitted by droooney

/*s*/Object.freeze(Array.prototype);

const {Set} = window;/*s*/

function types3(...values) {
  return new Set(values.map(x => typeof x)).size > 6;
}
