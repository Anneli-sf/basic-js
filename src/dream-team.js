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
  let dreamTeam = '';
   let team = [];
   let firstLetter ='';
   
   if (Array.isArray(members)) {
     members.sort();
     if (members.length > 0) {
       members.forEach(name => {
         if (typeof name === 'string') {
           firstLetter = name.trim().toUpperCase().slice(0, 1);
       
           team.push(firstLetter);
         } else return false;
       }) 
         console.log(team);
         dreamTeam = team.sort().join('');
         console.log(dreamTeam);
     }
   } else return false
}

module.exports = {
  createDreamTeam
};
