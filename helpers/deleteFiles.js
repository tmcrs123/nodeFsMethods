const fs = require('fs');
const path = require('path');

const deleteTarget = path.join(__dirname,'../downloads_test');


/**
 * Get all files from folder
 */
const filesInFolder = fs.readdirSync(deleteTarget,(err,files) =>{
    if(err) throw err;
    return files;
});

/**
 * Delete them!
 */
filesInFolder.forEach((file) => {
    console.log(`Deleting file: ${deleteTarget}/${file}`);
    fs.unlink(`${deleteTarget}/${file}`,(err) => {
        if(err) throw err;
    });
})
