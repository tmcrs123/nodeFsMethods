const fs = require('fs');
const path = require('path');
const copyFile = require('./downloadHandler_copyFile.js');


module.exports = function copyFolderRecursive(sourcePath, destinationPath,filetypes) {

    let items = fs.readdirSync(sourcePath);

    items.forEach((item,index) => {

        //try to echo progress bar here
        
        const curPath = path.join(sourcePath,item);
        const destination = path.join(destinationPath,item);
         
        if(fs.lstatSync(curPath).isDirectory()){
            if(!fs.existsSync(destination)){
                fs.mkdirSync(destination);
            }
            copyFolderRecursive(curPath,destination,filetypes);
        } else {
            let lastFile = (items.length-1 === index);
            copyFile(curPath,destination,item,lastFile,filetypes);        
        }
    })
  }
