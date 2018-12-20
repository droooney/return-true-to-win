// submitted by droooney

const {stringify} = JSON;
/*s*/const startsWith = Function.call.bind(''.startsWith);
const {getOwnPropertyDescriptor: getDesc} = Object;
const {has} = Reflect;/*s*/

/*s*/delete Proxy;/*s*/

function circular6(obj, key) {
  return (
    /*s*/getDesc(obj, key).enumerable
    && !has(obj, 'toJSON')/*s*/
    && typeof obj === 'object'
    /*s*/&& typeof key === 'string'
    && startsWith(stringify(obj), '{')/*s*/
    && obj[key] === obj
  );
}
