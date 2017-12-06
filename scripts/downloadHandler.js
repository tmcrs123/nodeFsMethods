const fs = require('fs');
const copyFolderRecursive = require('./downloadHandler_copyFolder.js');
const deleteFolderRecursive = require('./downloadHandler_deleteFolder.js');

const source = process.argv[2];
const destination = process.argv[3];
const deleteFilesOlderThanDays = Number(process.argv[4]);
const fileTypes = process.argv.slice(5).map(filetype => `.${filetype}`);

console.log('Copying only filetypes: ' , fileTypes);

// copia todos os que estejam dentro do intervalo de datas
// copia só os tipos de ficheiros que lhe passo
// progress bar
// show usage and wait for input

if (validInput(source, destination, deleteFilesOlderThanDays)) {
  copyFolderRecursive.source = source;
  deleteFolderRecursive.rootPath = source;
  copyFolderRecursive(source,destination,fileTypes);
  deleteFolderRecursive(source);
} else {
  process.exit();
}

function validInput(source, destination, deleteFilesOlderThanDays) {
  if (!fs.existsSync(source)) {
    process.on('exit', () => {
      console.log('Oops! Files not copied. Source path is invalid.');
    });
    return false;
  } else if (!fs.existsSync(destination)) {
    process.on('exit', () => {
      console.log('Oops! Files not copied. Destination path is invalid.');
    });
    return false;
  } else if (deleteFilesOlderThanDays && typeof deleteFilesOlderThanDays !== 'number' && !isNaN(deleteFilesOlderThanDays)) {
    process.on('exit', () => {
      console.log('Oops! Files not copied. Please input a valid number.');
    });
    return false;
  }
  return true;
}

