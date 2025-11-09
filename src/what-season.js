const { NotImplementedError } = require("../lib");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }
  const year = [
    ["winter", 0, 1, 11],
    ["spring", 2, 3, 4],
    ["summer", 5, 6, 7],
    ["autumn", 8, 9, 10],
  ];
  const month = date.getMonth();
  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  }
  let season = "";
  year.forEach((item) => {
    if (item.includes(month)) {
      season = item[0];
    }
  });
  return season;
}

module.exports = {
  getSeason,
};
