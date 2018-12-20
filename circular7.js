// submitted by droooney

const {stringify} = JSON;
/*s*/const startsWith = Function.call.bind(''.startsWith);
const {getOwnPropertyDescriptor: getDesc} = Object;
const {has} = Reflect;/*s*/

/*s*/delete Proxy;/*s*/

function circular7(obj, key) {
  /*s*/const desc = getDesc(obj, key);/*s*/

  return (
    /*s*/desc.enumerable
    && desc.configurable
    && desc.value === obj
    && !has(obj, 'toJSON')/*s*/
    && typeof obj === 'object'
    /*s*/&& typeof key === 'string'
    && startsWith(stringify(obj), '{')/*s*/
    && obj[key] === obj
  );
}
