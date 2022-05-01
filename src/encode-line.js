const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine( str ) {
  let newStr = '';
  let counter = 0;

  for (let i=0; i<str.length; i++) {
    if (str[i] != str[i+1] && str[i] != str[i-1]) {
     newStr = newStr + str[i];
    } else counter++;

    if (counter > 0 && str[i] != str[i+1]) {
      newStr = newStr + counter + str[i];
      counter = 0;
    }
  } 
  return newStr;
}

module.exports = {
  encodeLine
};
