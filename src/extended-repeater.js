const { NotImplementedError } = require('../extensions/index.js');

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
 str = str + "";

  let add = options.addition + "";
  let addRepeat = options.additionRepeatTimes;
  let addSepar = options.additionSeparator || "|";

  let separ = options.separator || "+";
  let repeat = options.repeatTimes;

  let newAddition = "";
  let result = "";

  if (
    (addRepeat != undefined && options.addition != undefined) ||
    options.addition == null
  ) {
    newAddition = (add + addSepar).repeat(addRepeat - 1) + add;
  } else if (addRepeat == undefined && options.addition != undefined)
    newAddition = add;

  if (repeat != undefined && newAddition != "undefined") {
    result =
      (str + newAddition + separ).repeat(repeat - 1) + (str + newAddition);
  } else if (repeat == undefined && newAddition != "undefined")
    result = str + newAddition;
  else result = (str + separ).repeat(repeat - 1) + str;

  return result;
}

module.exports = {
  repeater
};
