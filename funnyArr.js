// submitted by droooney

function funnyArr(f) {
  let called = false;
  let result;
  const checker = arr => {
    called = true;

    return result = Array.isArray(arr) && Object.getOwnPropertyNames(arr).length > arr.length + 1;
  };

  return f(checker) && called && result;
}
