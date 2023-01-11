const Hebcal = require(`hebcal`);
const FileSystem = require('fs/promises');


let hDate = Hebcal.HDate(new Date()).toString('h').split('').reverse().join('');

FileSystem.writeFile('./date.txt', hDate.toString('h').split('').reverse().join(''));

console.log(hDate);

module.exports = {
    hDate : hDate
};