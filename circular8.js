// submitted by droooney

const {stringify} = JSON;
/*s*/const startsWith = Function.call.bind(''.startsWith);
const {getOwnPropertyDescriptor: getDesc} = Object;
const {has} = Reflect;/*s*/

/*s*/delete Proxy;/*s*/

function circular8(obj, key) {
  /*s*/const desc = getDesc(obj, key);
  const descOfDesc = getDesc(desc, 'value');/*s*/

  return (
    /*s*/desc.enumerable
    && desc.configurable
    && desc.value === obj
    && descOfDesc.value === obj
    && !has(obj, 'toJSON')/*s*/
    && typeof obj === 'object'
    /*s*/&& typeof key === 'string'
    && startsWith(stringify(obj), '{')/*s*/
    && obj[key] === obj
  );
}
