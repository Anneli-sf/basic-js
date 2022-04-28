const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason( date ) {
 const year = {
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
    winter: [12, 1, 2],
  };
 let month = date.getMonth() + 1;
 
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== "[object Date]" ||
    typeof date !== "object" ||
    Object.keys(date).length > 0 ||
    !(date instanceof Date)
  ) { throw new Error("Invalid date!");
  }

  for (let season in year) {
    if (year[season].includes(month)) {
      return season;
    }
  }
}

module.exports = {
  getSeason
};
