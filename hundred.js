// submitted by droooney

delete Proxy;

function hundred(x) {
  return !('toString' in x) && !('valueOf' in x) && x == 100;
}
