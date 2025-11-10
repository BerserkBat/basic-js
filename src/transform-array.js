const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  const deleted = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      switch (arr[i]) {
        case "--discard-next":
          if (typeof arr[i + 1] !== "string") {
            i++;
            deleted.push(i);
          }
          break;
        case "--discard-prev":
          if (i != 0 && typeof arr[i - 1] !== "string") {
            if (deleted.includes(i - 1)) {
              break;
            }
            result.splice(result.length - 1, 1);
            deleted.push(i);
          }
          break;
        case "--double-next":
          if (i + 1 < arr.length && typeof arr[i + 1] !== "string") {
            result.push(arr[i + 1]);
          }
          break;
        case "--double-prev":
          if (deleted.includes(i - 1)) {
            break;
          }
          if (i != 0 && typeof arr[i - 1] !== "string") {
            if (i - 1 >= 0) {
              result.push(arr[i - 1]);
            }
          }
          break;
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform,
};
