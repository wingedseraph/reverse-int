module.exports = function reverse(n) {
  // reverse(123); // 321
  // reverse(233); // 332
  // reverse(535); // 535
  // reverse(95034); // 43059

  /*
  нужно использовать method reverse
  -> это array method
  выходит мне надо сначала сделать number -> string -> array
  использовать array.reverse()
  вернуть array -> number
  return number
  */

  return String(n)
    .replace(/-/g, "")
    .split("")
    .reverse()
    .toString()
    .replace(/,/g, "");
};
