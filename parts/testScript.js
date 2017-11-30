const copyFile = require('./copyFile');
const deleteFile = require('./deleteFile');
const copyFolder = require('./copyFolder');
const deleteFolder = require('./deleteFolderRecursive.js');
const copyFolderRecursive = require('./copyFolderRecursive.js');
const path = require('path');

const source = path.join(__dirname,'../../../Testing/source');
const destination = path.join(__dirname,'../../../Testing/target');
const file='fileA.txt';
const folder = 'aFolder';

//copyFile(source,destination,file) //tested
//deleteFile(destination,file) //tested
//copyFolder(source,destination,folder); //tested
//deleteFolder(path.join(destination,folder)); // tested
copyFolderRecursive(source,destination);
deleteFolder(source);




//TODO
//Break if argumenst process argv are not correct
//Only copy selected extensions
//option to keep source folder or not