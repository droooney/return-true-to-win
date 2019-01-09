// submitted by droooney

/*s*/const {Set} = window;/*s*/

function types2(...values) {
  return new Set(values.map(x => typeof x)).size > 6;
}
