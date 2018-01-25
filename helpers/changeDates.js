const fs = require('fs');
const ms1Day = 24 * 60 * 60 * 1000;
const path = require('path');


const files  = fs.readdirSync('../testFolder');

files.forEach((file,index) => {

    let days=1;

    if(index === files.length-1) {
        days=15
    }

    // if(index%2 === 0){
    //     days = 10
    // } else{
    //     days =2
    // }
        

    let time = (Date.now() - days * ms1Day)/1000; // X days ago
    fs.utimes(path.join(__dirname,`../testFolder/${file}`),time,time,(err) => {
        if(err) throw err
    })
});