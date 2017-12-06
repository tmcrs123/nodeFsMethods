const fs = require('fs');

module.exports = function(path){

    const pathArr = path.split('/');

    pathArr.reduce((root,current) => {
        if(!fs.existsSync(`${root}/${current}`)){
            // console.log(`Creating folder in ${root}/${current}`);
            fs.mkdirSync(`${root}/${current}`);
        } else{
            // console.log(`Path ${root}/${current} already exists`);
        } 
        return `${root}/${current}`;
    });
}





