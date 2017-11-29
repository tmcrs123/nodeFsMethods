const fs = require('fs');

module.exports = function(sourceFolder,fileName){

    const filePath = `${sourceFolder}/${fileName}`; 

    fs.unlink(`${sourceFolder}/${fileName}`,(err) => {
        if(err) throw err;
        console.log(`Deleted ${fileName}.`);
    });
}
