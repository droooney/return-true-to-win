// submitted by droooney

function funnyArr2(arr) {
  return Array.isArray(arr) && Object.getOwnPropertyNames(arr).length > arr.length + 1;
}
