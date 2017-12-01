const fs = require('fs');
const path = require('path');
const copyFile = require('./downloadHandler_copyFile.js');

module.exports = function copyFolderRecursive(sourcePath, destinationPath) {

    let items = fs.readdirSync(sourcePath);

    items.forEach((item,index) => {
        
        const curPath = path.join(sourcePath,item);
        const destination = path.join(destinationPath,item);

        if(fs.lstatSync(curPath).isDirectory()){
            if(!fs.existsSync(destination)){
                fs.mkdirSync(destination);
                // console.log(`Creating a new folder in ${destination}`);
            }
            copyFolderRecursive(curPath,destination);
        } else {
            let lastFile = (items.length-1 === index && path.parse(curPath).dir !== copyFolderRecursive.source);
            console.log(`item ${item} is last file? ${lastFile}`);
            copyFile(curPath,destination,item,lastFile);        
        }

    })

  }
