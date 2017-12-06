const fs = require('fs');
const copyFolderRecursive = require('./downloadHandler_copyFolder.js');
const deleteFolderRecursive = require('./downloadHandler_deleteFolder.js');

const source = process.argv[2];
const destination = process.argv[3];
const keepSourceFolder = process.argv[4].toUpperCase();
let fileTypes;

// set fileTypes

if (process.argv[5]) {
  fileTypes = process.argv.slice(5).map(filetype => `.${filetype}`);
} else {
  fileTypes = '*';
}

// progress bar
// show usage and wait for input

if (validInput(source, destination)) {
  deleteFolderRecursive.rootPath = source;
  copyFolderRecursive(source, destination, fileTypes);
  if (keepSourceFolder === 'N')deleteFolderRecursive(source);
  console.log('All done!');
} else {
  process.exit();
}

function validInput(source, destination) {
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
  } else if (!(keepSourceFolder === 'Y' || keepSourceFolder === 'N')) {
    process.on('exit' , () => {
        console.log('Please input a valid string (y/n) to signal if you want to keep source folder.');
    })
    return false;
  }
  return true;
}

