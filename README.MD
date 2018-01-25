<h1>Folder/Download handler</h1>

A set of node js methods to handle folders and files.

I've written these scripts because I wanted an efective way of managing my downloads folder and practice with node.

In particular the downloadHandler.js script allows you to move files from one folder to the other and, in addition, it allows you to 1 - specify if you want to keep the files in the source folder or not and 2 - allows to specify what type of file extensions should be copied.

Hope you like it,

Tiago

<h2>Video Example</h2>

<img src="https://i.imgur.com/JGVACmo.gifv"/>


<img src="https://i.imgur.com/H26nI8e.gif"/>


<h2>Usage</h2>

The args of the downloadHandler.js script are as follows:

(sourceFolder: string, targetFolder: string, keepSourceFiles: string(y/n), fileExtensions(split by a space))

<strong>Remark:</strong> If you don't specify file extensions all file extensions will be targeted.

<h2>Example Scripts:</h2>

    node downloadsHandler.js ../source ../target y js

Will only copy .js folders that contain .js files and .js files, and won't delete the files in the source folder.

    node downloadsHandler.js ../source ../target n js avi mp4 java css

Will copy all js,avi,mp4,java and css files and will delete all files in original folder.

    node downloadsHandler.js ../source ../target y js avi mp4 java css

Will copy all js,avi,mp4,java and css files and delete files in original folder.

    node downloadsHandler.js ../source ../target n

Will copy all files and keep source folder as is.


