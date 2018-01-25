<h1>Folder/Download handler</h1>

A set of node js methods to handle folders and file.

I've written these scripts because I wanted an efective way of managing my downloads folder and practice with node.

In particular the downloadHandler.js script allows you to move files from one folder to the other and, in addition, it allows you to 1 - specify if you want to keep the files in the source folder or not and 2 - allows to specify what type of file extensions should be copied.

<strong>Remark:</strong> If you don't specify file extensions all file extensions will be targeted.

For example running -> node downloadsHandler.js ../source ../target y js -> will only copy .js folders that contain .js files and .js files, and won't delete the files in the source folder.

The args of this method are as follows:

(sourceFolder:string,targetFolder:string,keepSourceFiles:string(y/n),fileExtensions(split by a space))

Example Scripts:
<i>node downloadsHandler.js ../source ../target n js avi mp4 java css</i>

Will copy all js,avi,mp4,java and css files and keep original folder as is.

<i>node downloadsHandler.js ../source ../target y js avi mp4 java css</i>

Will copy all js,avi,mp4,java and css files and delete files in original folder.

<i>node downloadsHandler.js ../source ../target n</i>

Will copy all and keep source folder as is.

node dh.js soruce target keepSourceFile extension1 extension2 extension3
