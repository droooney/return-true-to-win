// submitted by droooney

function commutativity(x, y) {
  const res1 = eval(`${x} + ${y}`);
  const res2 = eval(`${y} + ${x}`);

  return x && y && res1 && res2 && res1 !== res2;
}
