const fs = require('fs');
const path = require('path');

module.exports = function(sourceFolder,destinationFolder,filename,lastFile,sourcePath){
    // console.log('source' , sourceFolder);
    // console.log('destination' , destinationFolder);

    const readFromPath = `${sourceFolder}`;
    const copyToPath = `${destinationFolder}`;


    console.log('reading from path' , readFromPath);
    // console.log('copying from path' , copyToPath);

    // console.log(`Copying file ${fileName} `);
    
    const readStream = fs.createReadStream(readFromPath);
    const writeStream = fs.createWriteStream(copyToPath);

    writeStream.on('finish', () => {
        // console.log(`Done copying file ${filename}. Removing from folder...`);
        // console.log(`Items in folder after removing ${filename} : ${fs.readdirSync(path.parse(readFromPath).dir)}`);
        if(lastFile){
            let folder = path.parse(readFromPath).dir;
            const itemsInFolder = fs.readdirSync(path.parse(readFromPath).dir);
            // console.log(`There are ${fs.readdirSync(path.parse(readFromPath).dir).length} items in folder ${path.parse(readFromPath).dir}`);
            itemsInFolder.map((item) => {
                let remove = path.join(path.parse(readFromPath).dir,item);
                fs.unlinkSync(remove);
            }); 
            fs.rmdirSync(path.parse(readFromPath).dir);
        } else {
            if(fs.existsSync(readFromPath)){
                fs.unlinkSync(readFromPath);
            }
        }
    });

    readStream.pipe(writeStream);
}
