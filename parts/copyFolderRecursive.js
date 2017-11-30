/**
 * for items in source
 * 
 *  if item is a file 
 *      copy file
 * 
 *  if item is a folder
 *      recurse
 * 
 */

const fs = require("fs");
const path = require('path');
const copyFile = require('./copyFileHelper.js')

module.exports = function copyFolderRecursive(sourcePath, destinationPath) {

    fs.readdirSync(sourcePath).forEach((item) => {
        
        const curPath = path.join(sourcePath,item);
        const destination = path.join(destinationPath,item);

        if(fs.lstatSync(curPath).isDirectory()){
            if(!fs.existsSync(destination)){
                fs.mkdirSync(destination);
                console.log(`Creating a new folder in ${destination}`);
            }
            copyFolderRecursive(curPath,destination);
        } else {
            copyFile(curPath,destination,item);
        }

    })

  }
