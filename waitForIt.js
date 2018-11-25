// submitted by droooney

const {Promise} = window;

delete Promise;

function waitForIt(x) {
  return Promise.resolve(x());
}
