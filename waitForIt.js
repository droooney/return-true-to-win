// submitted by droooney

const {Promise} = window;

delete window.Promise;

function waitForIt(x) {
  return Promise.resolve(x());
}
