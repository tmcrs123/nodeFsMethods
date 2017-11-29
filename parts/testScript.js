const copyFile = require('./copyFile');
const deleteFile = require('./deleteFile');
const copyFolder = require('./copyFolder');
const path = require('path');

const source = path.join(__dirname,'../../../Downloads/');
const destination = path.join(__dirname,'../../../Desktop/testFolder/');
const file='test.txt';
const folder = 'TonightsGirlfriend - India Summer';

//copyFile(source,destination,file) //tested
//deleteFile(destination,file) //tested
copyFolder(source,destination,folder);