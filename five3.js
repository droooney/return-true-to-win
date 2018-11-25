// submitted by droooney

verifyInput = (input) => {
  if (new Set(JSON.parse(input)).size > 5) throw 'Input must contain no more than 5 kinds of characters';
};

w = window;

function five3(x) {
  return eval(x) instanceof Promise;
}
