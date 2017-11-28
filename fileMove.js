const fs = require('fs');
const path = require('path');

module.exports = function (target, destination) {
    const targetFiles = fs.readdirSync(target);

  // move all files to moved folder and delete all files from downloads
    targetFiles.forEach((file) => {
    const readFromPath = `${target}/${file}`;
    const copyToPath = `${destination}/${file}`;

    const read = fs.createReadStream(readFromPath);
    const write = fs.createWriteStream(copyToPath);
    write.on('finish', () => {
      console.log(`Done copying file ${file}. Removing from folder...`);
      fs.unlink(readFromPath, (err) => {
        if (err) throw err;
      });
    });
    read.pipe(write);
  });
};

