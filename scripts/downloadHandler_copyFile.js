const fs = require("fs");
const path = require("path");
const createFoldersCascade = require('./downloadHandler_createFoldersCascade.js');

module.exports = function(readFromPath,copyToPath,filename,lastFile,filetypes) {
  
  let fileExtension = path.parse(readFromPath).ext;

  let shouldCopyFile = filetypes.indexOf(fileExtension) >= 0 || filetypes === '*';

  //if correct file type copy
  if (shouldCopyFile) {

    console.log('Copying file ' , filename);
    
    createFoldersCascade(path.parse(copyToPath).dir);

    const readStream = fs.createReadStream(readFromPath);
    const writeStream = fs.createWriteStream(copyToPath);
    
    readStream.pipe(writeStream);
  }
};
