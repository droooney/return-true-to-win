// submitted by droooney

function funArr3(arr) {
  return Array.isArray(arr) && Object.getOwnPropertyNames(arr).length > arr.length + 1 && arr.length > 3;
}
