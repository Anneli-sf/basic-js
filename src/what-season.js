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
  let season = date.getMonth() - 1;
  if (date == null || date == undefined) return 'Unable to determine the time of year!';
      
  if (typeof date !== "object" || date.getFullYear() < 1970) throw new Error("Invalid date!");
 
  if (season > 0 && season < 3 || season == 12 ) {return console.log('winter')}
  else if (season > 2 && season < 6 ) {return console.log('spring')}
  else if (season > 5 && season < 9 ) {return console.log('summer')}
  else if (season > 8 && season < 12 ) {return console.log('autumn')}
}

module.exports = {
  getSeason
};
