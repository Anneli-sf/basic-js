const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let number = n.toString();
  let cutNumber;
  let maxNumber;

  for (let i=0; i < number.length; i++) {
    if (i == 0) {
      maxNumber = +number.slice(1);
        // maxNumber = cutNumber;
    } else {
      cutNumber = + (number.slice(0, i) + number.slice(i+1));
      if (maxNumber < cutNumber) maxNumber = cutNumber;
    } 
  } 
  
  return maxNumber;
}

module.exports = {
  deleteDigit
};
