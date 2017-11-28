const fs = require('fs');
const path = require('path');
const stats = require('fs').Stats;
const ms1Day = 24 * 60 * 60 * 1000;


module.exports = function (destination, nDays) {
  const filesInMovedFolder = fs.readdirSync(destination);

  filesInMovedFolder.forEach((file) => {
    const copyToPath = `${destination}/${file}`;
    const pastDate = Date.now() - nDays * ms1Day; // X days ago


    // On moved folder, delete files older than 3 days that don't have a _keep tag
    fs.stat(copyToPath, (err, stats) => {
      if (err) throw err;

      if (stats.mtimeMs < pastDate) {
        console.log(`Removing file ${file}`);
        fs.unlink(copyToPath, (err) => {
          if (err) throw err;
        });
      }
    });
  });
};

