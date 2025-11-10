const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const strArr = str.split("");
  result = [];
  let count = 1;

  strArr.forEach((char, index) => {
    if (char === strArr[index + 1] && index < strArr.length) {
      count++;
    } else {
      if (count > 1) {
        result.push(count.toString() + char.toString());
        count = 1;
      } else {
        result.push(char);
      }
    }
  });
  return result.join("");
}

module.exports = {
  encodeLine,
};
