const fs = require('fs');
const copyFolderRecursive = require('./downloadHandler_copyFolder.js');
const source = process.argv[2];
const destination = process.argv[3];
const numberDaysToKeepFiles = Number(process.argv[4]);

//copia todos os que estejam dentro do intervalo de datas e n elimina a pasta
//copia só os tipos de ficheiros que lhe passo

if(validInput(source,destination,numberDaysToKeepFiles)){
    copyFolderRecursive.source = source;
    copyFolderRecursive(source,destination);
} else {
    process.exit();
}

function validInput(source,destination,numberDaysToKeepFiles){
    if(!fs.existsSync(source)){
        process.on('exit', () => {  
            console.log('Oops! Files not copied. Source path is invalid.');
        });
        return false;
    } else if(!fs.existsSync(destination)){
        process.on('exit', () => {  
            console.log('Oops! Files not copied. Destination path is invalid.');
        });
        return false;
    } else if(numberDaysToKeepFiles && typeof numberDaysToKeepFiles != 'number' && !isNaN(numberDaysToKeepFiles)){
        process.on('exit', () => {  
            console.log('Oops! Files not copied. Please input a valid number.'); 
        });
        return false;     
    }
    return true;
}




