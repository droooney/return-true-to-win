// submitted by droooney

const {stringify: toJSON} = JSON;

function stringify(obj) {
  try {
    toJSON(obj);
  } catch (e) {
    // try again
    toJSON(obj);
    return true;
  }
}
