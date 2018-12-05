// submitted by droooney

const {stringify} = JSON;
/*s*/const startsWith = Function.call.bind(''.startsWith);
const {getOwnPropertyDescriptor: getDesc} = Object;/*s*/

function circular4(obj, key) {
  return (
    /*s*/getDesc(obj, key).enumerable/*s*/
    && typeof obj === 'object'
    && /*s*/startsWith(stringify(obj), '{')/*s*/
    && obj[key] === obj
  );
}
