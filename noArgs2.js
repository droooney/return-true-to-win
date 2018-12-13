// submitted by droooney

/*s*/verifyInput = (input) => {
  if (/\./.test(input)) throw 'No spread this time';
};/*s*/

function noArgs2() {
  return eval() && !arguments.length;
}
