const moveFiles = require('./fileMove.js');
const removeOldFiles = require('./removeOld.js');
const path = require('path');

const target = path.join(__dirname,process.argv[2]);
const destination = path.join(__dirname,process.argv[3]);
const nDaystoDelete = process.argv[3];


moveFiles(target,destination);
removeOldFiles(destination,nDaystoDelete);
