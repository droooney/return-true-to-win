// submitted by droooney

const {stringify: toJSON} = JSON;
/*s*/const {keys} = Object;
const {has} = Reflect;

delete Proxy;/*s*/

function stringify2(obj) {
  /*s*/if (has(obj, 'toJSON') || keys(obj).length) {
    return false;
  }/*s*/

  try {
    toJSON(obj);
  } catch (e) {
    // try again
    toJSON(obj);
    return true;
  }
}
