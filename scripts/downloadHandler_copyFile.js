const fs = require('fs');
const path = require('path');

module.exports = function(sourceFolder,destinationFolder,filename,lastFile){
    // console.log('source' , sourceFolder);
    // console.log('destination' , destinationFolder);

    const readFromPath = `${sourceFolder}`;
    const copyToPath = `${destinationFolder}`;

    // console.log('reading from path' , readFromPath);
    // console.log('copying from path' , copyToPath);

    // console.log(`Copying file ${fileName} `);
    
    const readStream = fs.createReadStream(readFromPath);
    const writeStream = fs.createWriteStream(copyToPath);

    writeStream.on('finish', () => {
    // console.log(`Done copying file ${fileName}. Removing from folder...`);
        fs.unlinkSync(readFromPath);
        console.log(`Items in folder after removing ${filename} : ${fs.readdirSync(path.parse(readFromPath).dir)}`);
        if(lastFile){
            console.log('In last file!');
            console.log(`There are ${fs.readdirSync(path.parse(readFromPath).dir).length} items in folder ${path.parse(readFromPath).dir}`);
            fs.rmdirSync(path.parse(readFromPath).dir);
        }
    });

    readStream.pipe(writeStream);
}
