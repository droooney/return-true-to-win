// submitted by droooney

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
  /*s*/if (/\\/.test(input)) throw 'No escape sequences now';/*s*/
};

function dozen6(palindrome) {
  return (
    typeof palindrome === 'string'
    && palindrome.length > 1e3
    && new Set(palindrome).size > 16
    && palindrome === [...palindrome].reverse().join('')
  );
}
