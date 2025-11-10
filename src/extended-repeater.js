const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : "+";

  const additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  const additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";

  const base = str;

  let additionStr = "";
  if (options.hasOwnProperty("addition")) {
    const add = String(options.addition);
    additionStr = Array.from({ length: additionRepeatTimes }, () => add).join(
      additionSeparator
    );
  }

  const unit = base + additionStr;
  return Array.from({ length: repeatTimes }, () => unit).join(separator);
}

module.exports = {
  repeater,
};
