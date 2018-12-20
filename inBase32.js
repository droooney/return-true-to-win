// submitted by droooney

// base32 - more advanced version of base16 (no paddings though) :)

verifyInput = JSON.parse;

const {eval: globalEval} = window;
const {fromCharCode} = String;
const {parseInt} = Number;
const alphabet = '+-*/%^&|~<=>()01[].?:!`,;abelotv';
const testToDecode = /./.test.bind(/^(?:[+\-*/%^&|~<=>()01[\].?:!`,;abelotv]{8})+$/);
const testToEncode = /./.test.bind(/^(?:[\u0000-\u00ff]{5})+$/);

/*
  examples:

  encode('12345');      // '&%a/&)-!'
  encode('alert(123)'); // '(^`&=l?:^+;?%(a<'
*/
const encode = (string) => {
  if (!testToEncode(string)) {
    throw 'Wrong input';
  }

  return string.match(/.{5}/g)
    .map(s => (
      [...s]
        .map(c => c.charCodeAt().toString(2).padStart(8, 0))
        .join``
        .match(/.{5}/g)
        .map(b => alphabet[parseInt(b, 2)])
        .join``
    ))
    .join``;
};

/*
  examples:

  decode('=-a&tt/a');         // 'Proxy'
  decode(')a.,0~*%(^b&==-<'); // 'new Date()'
*/
const decode = (string) => {
  if (!testToDecode(string)) {
    throw 'Wrong input';
  }

  return string.match(/.{8}/g)
    .map(s => fromCharCode(
      ...[...s]
        .map(c => `${alphabet.indexOf(c).toString(2)}`.padStart(5, 0))
        .join``
        .match(/.{8}/g)
        .map(b => parseInt(b, 2))
    ))
    .join``;
};

function inBase32(stringToDecode) {
  const decoded = decode(stringToDecode);
  const encoded = encode(decoded);
  const value = Math.random();
  const obj = { a: value };

  globalEval(encoded)(obj);

  if ('a' in obj) {
    return false;
  }

  const copy = {};

  globalEval(decoded)(copy);

  return copy.a === value;
}
