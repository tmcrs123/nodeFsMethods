const fs = require("fs");
const path = require("path");
const createFoldersCascade = require('./downloadHandler_createFoldersCascade.js');

module.exports = function(readFromPath,copyToPath,filename,lastFile,filetypes) {
  
  let fileExtension = path.parse(readFromPath).ext;

  let shouldCopyFile = filetypes.indexOf(fileExtension) >= 0;

  //if correct file type copy
  if (shouldCopyFile) {
    
    createFoldersCascade(path.parse(copyToPath).dir);

    const readStream = fs.createReadStream(readFromPath);
    const writeStream = fs.createWriteStream(copyToPath);
    
    // readStream.on('error' , (err) => console.log(err));
    
    // writeStream.on('finish', () => {
    //     fs.unlinkSync(readFromPath);
    // });
    
    readStream.pipe(writeStream);
  }
};
