// submitted by droooney

verifyInput = (input) => {
  if (new Set(input).size > 12) throw 'Dozen characters now';
};

function dozen2(palindrome) {
  return (
    typeof palindrome === 'string'
    && palindrome.length > 1e3
    && new Set(palindrome).size > 13
    && palindrome === [...palindrome].reverse().join('')
  );
}
