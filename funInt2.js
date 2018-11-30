// submitted by droooney

function funInt2(big, one) {
  return (
    big == Number.MAX_SAFE_INTEGER + 1
    && one == 1
    && big + one != Number.MAX_SAFE_INTEGER + 1
  );
}
