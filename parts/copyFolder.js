const fs = require('fs');
const path = require('path');
const copyFile = require('./copyFile');

module.exports = function(sourceFolder,destinationFolder,folderName){

const copiedFolder = path.join(destinationFolder,folderName)


//check if the folder exists and if it doesn't create a new folder
if(!fs.existsSync(copiedFolder)){
    fs.mkdirSync(copiedFolder)
}

//for all the folderToCopys in the folder, copy them to the new folder 1 by one

const copiedFolderFiles = fs.readdirSync(`${sourceFolder}/${folderName}`)
const sourceFolderPath = `${sourceFolder}/${folderName}`

copiedFolderFiles.forEach((file) => {
    copyFile(sourceFolderPath,copiedFolder,file);
})
}
