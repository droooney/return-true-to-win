// submitted by droooney

function commutativity2(x, y) {
  const res1 = x + y;
  const res2 = y + x;

  return x && y && res1 && res2 && res1 !== res2;
}
