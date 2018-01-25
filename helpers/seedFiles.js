const fs = require('fs');
const path = require('path');
const targetFolder = '../downloads_test';
const lorem = 'Bacon ipsum dolor amet burgdoggen shoulder andouille ham hock ham buffalo ground \n';
const ms1Day = 24*60*60*1000;


/**
 * Seed files
 */
for(let i =0 ; i <10 ; i++){
    fs.writeFileSync(`${targetFolder}/file_${i}.txt`, '');
    console.log(`Created file_${i} in folder`);
}


/**
 * Get a list of created files
 */
const filesInFolder = fs.readdirSync(targetFolder);



/**
 * Write a lot of text to the files
 */

let writeStreams = [];

for(let i = 0 ; i < 10; i++){

    let filePath = `${targetFolder}/file_${i}.txt`;

    writeStreams.push(fs.createWriteStream(filePath,{encoding:'utf8'}));
    
}

writeStreams.forEach((writeStream,index) => {
    
    let filePath = `${targetFolder}/file_${index}.txt`;

    writeStream.id = index;
    
    writeStream.on('error', (err) => {
        console.error(err);
        write.destroy(err);
    })

    writeStream.on('finish',() => {
        fs.utimes(filePath,(Date.now()- index*ms1Day)/1000, (Date.now() - index*ms1Day)/1000,(err) => {
            if (err) throw err;
        });
        console.log(`Finished writing lorem to stream ${writeStream.id} `);

    });

    for(let i = 0 ; i < 1e5; i++){
        writeStream.write(lorem,()=>{});
    }

    writeStream.end();
})



