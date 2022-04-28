const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(/* members */) {
  let dreamTeam = "";
  
  if (!Array.isArray(members) || !members.length) {
    return false;
  }
 
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      dreamTeam += members[i].trim().slice(0, 1);
      dreamTeam = dreamTeam.toUpperCase();
      dreamTeam = dreamTeam.split("").sort().join("");
    }
  }
  return dreamTeam;
}

module.exports = {
  createDreamTeam
};
