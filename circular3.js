// submitted by droooney

function circular3(obj, key) {
  return (
    typeof obj === 'object'
    && /*s*/JSON.stringify(obj).startsWith('{')/*s*/
    && obj[key] === obj
  );
}
