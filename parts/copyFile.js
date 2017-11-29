const fs = require('fs');

module.exports = function(sourceFolder,destinationFolder,fileName){
    console.log('source' , sourceFolder);
    console.log('destination' , destinationFolder);

    const readFromPath = `${sourceFolder}/${fileName}`;
    const copyToPath = `${destinationFolder}/${fileName}`;

    console.log('reading from path' , readFromPath);
    console.log('copying from path' , copyToPath);

    console.log(`Copying file ${fileName} `);
    
    const readStream = fs.createReadStream(readFromPath);
    const writeStream = fs.createWriteStream(copyToPath);

    readStream.on('readable', () => {
        console.log('reading file...');
    })

    // writeStream.on('finish', () => {
    // console.log(`Done copying file ${fileName}. Removing from folder...`);
    //     fs.unlink(readFromPath, (err) => {
    //         if (err) throw err;
    //     });
    // });

    readStream.pipe(writeStream);
}
