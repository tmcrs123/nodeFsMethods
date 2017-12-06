const fs = require('fs');
const path = require('path');
const copyFile = require('./downloadHandler_copyFile.js');

module.exports = function copyFolderRecursive(sourcePath, destinationPath) {

    let items = fs.readdirSync(sourcePath);

    items.forEach((item,index) => {
        
        const curPath = path.join(sourcePath,item);
        const destination = path.join(destinationPath,item);

        // console.log('fn source'  , copyFolderRecursive.source);
        // console.log('passed source' , sourcePath);
        // console.log(copyFolderRecursive.source === sourcePath);
         

        if(fs.lstatSync(curPath).isDirectory()){
            if(!fs.existsSync(destination)){
                fs.mkdirSync(destination);
                console.log(`Creating a new folder in ${destination}`);
            }
            copyFolderRecursive(curPath,destination,sourcePath);
        } else {
            let lastFile = (items.length-1 === index && copyFolderRecursive.source != sourcePath);
            // console.log('passing to copy file file: ' , curPath , lastFile);
            copyFile(curPath,destination,item,lastFile,sourcePath);        
        }

    })

  }
