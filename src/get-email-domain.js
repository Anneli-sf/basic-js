const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  email = email.split('@');
  
  let str = email[email.length-1].toString();
  return str;
}

module.exports = {
  getEmailDomain
};
