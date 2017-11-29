const copyFile = require('./copyFile');
const deleteFile = require('./deleteFile');
const copyFolder = require('./copyFolder');
const deleteFolder = require('./deleteFolder.js');
const path = require('path');

const source = path.join(__dirname,'../../../Testing/source');
const destination = path.join(__dirname,'../../../Testing/target');
const file='fileA.txt';
const folder = 'aFolder';

//copyFile(source,destination,file) //tested
//deleteFile(destination,file) //tested
//copyFolder(source,destination,folder); //tested
// console.log('Deleting -> ' , path.join(destination,folder));
deleteFolder(path.join(destination,folder));


//TODO
//Break if argumenst process argv are not correct