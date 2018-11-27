// IWantAmbago + droooney

// https://www.youtube.com/watch?v=-ruC5A9EzzE

verifyInput = (input) => {
  const parsed = JSON.parse(input);
  const digits = parsed.match(/\d/g) || [];

  if (digits.length !== 9 || digits.some((d, i) => d != i + 1)) {
    throw 'Input must contain 123456789 in this order';
  }

  const remainingOperator = parsed.replace(/[\d+\-*/()]/g, '');

  if (new Set(remainingOperator).size > 1 || /[^%&|^~<>]/.test(remainingOperator)) {
    throw 'Input must contain only digits, parenthesis and +, -, *, **, / operators (and 1 more)';
  }
};

function get10958(x) {
  return eval(x) === 10958;
}
