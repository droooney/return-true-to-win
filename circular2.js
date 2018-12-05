// submitted by droooney

function circular2(obj, key) {
  return (
    /*s*/typeof key !== 'string'
    && typeof key !== 'object'/*s*/
    && typeof obj === 'object'
    && JSON.stringify(obj)
    && obj[key] === obj
  );
}
