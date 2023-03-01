const fs = require('fs');
const pathto = "Resources"

function readPath(path){
    fs.readdir(pathto, (error, fileNames) => {
        if (error) return;

    })
}