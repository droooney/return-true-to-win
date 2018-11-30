// submitted by droooney

/*s*/const forbiddenTypes = ['string', 'object'];/*s*/

function funInt3(big, one) {
  return (
    big == Number.MAX_SAFE_INTEGER + 1
    && one == 1
    && big + one != Number.MAX_SAFE_INTEGER + 1
    /*s*/&& !forbiddenTypes.includes(typeof big)
    && !forbiddenTypes.includes(typeof one)/*s*/
  );
}
