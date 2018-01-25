/**
 * Read file extensions from json object
 */

const fs = require('fs');
const path = require('path');
const util = require('util');

module.exports = function (target, destination) {
    const targetFiles = fs.readdirSync(target);


  // move all files to moved folder and delete all files from downloads
  let count = 0  
  targetFiles.forEach((file) => {
    const readFromPath = `${target}/${file}`;
    const copyToPath = `${destination}/${file}`;
    const fileExtension = path.extname(readFromPath);
    count++

    if(fileExtension == '.mp4' || fileExtension == '.deb' || fileExtension == '.zip'){
      console.log(`Copying file ${file} `);
        const read = fs.createReadStream(readFromPath);
        const write = fs.createWriteStream(copyToPath);
        write.on('finish', () => {
          console.log(`Done copying file ${file}. Removing from folder...`);
          fs.unlink(readFromPath, (err) => {
            if (err) throw err;
          });
        });
        read.pipe(write);
    } else{
      return
    }
  });

  console.log('count is:' , count);
};



