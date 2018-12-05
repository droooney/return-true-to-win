// submitted by droooney

const {stringify} = JSON;
/*s*/const startsWith = Function.call.bind(''.startsWith);
const {getOwnPropertyDescriptor: getDesc} = Object;
const {has} = Reflect;/*s*/

/*s*/delete Proxy;/*s*/

function circular5(obj, key) {
  return (
    /*s*/getDesc(obj, key).enumerable
    && !has(obj, 'toJSON')/*s*/
    && typeof obj === 'object'
    && /*s*/startsWith(stringify(obj), '{')/*s*/
    && obj[key] === obj
  );
}
