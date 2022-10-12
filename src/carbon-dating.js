const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sampleActNum = parseFloat(sampleActivity);
  let k = Math.LN2 / HALF_LIFE_PERIOD;
  
  if (
    typeof sampleActivity == "string" &&
    sampleActNum > 0 &&
    sampleActNum < 15
  ) {
    let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActNum) / k);
    return result;
  } else return false;
}

module.exports = {
  dateSample
};
