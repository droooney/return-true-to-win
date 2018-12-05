// submitted by droooney

/*s*/const {has} = Reflect;/*s*/

function functional2(f) {
  return (
    /*s*/!has(window, f.name)/*s*/
    && f()
    && f instanceof Function
    && f.__proto__ !== Function.prototype
  );
}
