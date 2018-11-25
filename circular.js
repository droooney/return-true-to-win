// submitted by droooney

function circular(obj, key) {
  return typeof obj === 'object' && JSON.stringify(obj) && obj[key] === obj;
}
