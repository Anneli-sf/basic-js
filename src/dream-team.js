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

function createDreamTeam(members) {
  
  if (!Array.isArray(members) || !members.length) return false;
  let arrMembers = members.filter((item) => typeof item == "string");
  let result = arrMembers.map((item) =>
    item.split(" ").join("").slice(0, 1).toUpperCase()
  );
  result = result.sort().join("");
  return result;
  
}

module.exports = {
  createDreamTeam
};
