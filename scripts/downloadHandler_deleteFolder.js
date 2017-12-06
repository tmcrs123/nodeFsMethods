const fs = require('fs');
const path = require('path');

module.exports = function removeFolderRecursive(dirpath){
    if(fs.existsSync(dirpath)){
        fs.readdirSync(dirpath).forEach((item) => {
            let curPath = path.join(dirpath,item);
            if(fs.lstatSync(curPath).isDirectory()){
                removeFolderRecursive(curPath)
            } else {
                fs.unlinkSync(curPath)
            }
        })
        //scopeChain ftw!
        if(dirpath != removeFolderRecursive.rootPath) fs.rmdirSync(dirpath);
    } else{
        console.log('Directory does not exists');
    }

}