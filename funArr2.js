// submitted by droooney

function funArr2(arr) {
  return Array.isArray(arr) && Object.getOwnPropertyNames(arr).length > arr.length + 1;
}
