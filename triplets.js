// submitted by droooney

function triplets(x, y, z) {
  return x in y
    && y in z
    && z in x
    && x[y] === z
    && y[z] === x
    && z[x] === y
    && x !== y
    && y !== z
    && z !== x;
}
