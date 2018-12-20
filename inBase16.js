// submitted by droooney

// base16 (math version) - slightly less compact than base64 :)

verifyInput = JSON.parse;

const {eval} = window;
const {fromCharCode} = String;
const {parseInt} = Number;
const alphabet = '+-*/%^&|~<=>()01';
const testToDecode = /./.test.bind(/^(?:[+\-*/%^&|~<=>()01]{2})+$/);
const testToEncode = /./.test.bind(/^[\u0000-\u00ff]+$/);

/*
  examples:

  encode('alert(1)'); // '&-&(&^|*|%*~/-*<'
  encode('nice');     // '&0&<&/&^'
*/
const encode = (string) => {
  if (!testToEncode(string)) {
    throw 'Wrong input';
  }

  return string.split``
    .map(c => (
      c.charCodeAt().toString(2).padStart(8, 0)
        .match(/.{4}/g)
        .map(b => alphabet[parseInt(b, 2)])
        .join``
    ))
    .join``;
};

/*
  examples:

  decode('&%&|');     // 'dg'
  decode('&^|&&-&('); // 'eval'
*/
const decode = (string) => {
  if (!testToDecode(string)) {
    throw 'Wrong input';
  }

  return string.match(/.{2}/g)
    .map(s => fromCharCode(parseInt(
      [...s]
        .map(c => `${alphabet.indexOf(c).toString(2)}`.padStart(4, 0))
        .join``
      , 2)))
    .join``;
};

function inBase16(stringToDecode) {
  const decoded = decode(stringToDecode);
  const encoded = encode(decoded);

  return eval(encoded) === 42 && eval(decoded) === 42;
}
