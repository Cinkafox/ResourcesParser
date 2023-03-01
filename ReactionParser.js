const fs = require('fs');
const path = require('path');


let PATH = "Resources/Prototypes/Recipes/Reactions/"


fs.readdir(PATH, (error, fileNames) => {
    if (error) throw error;

    fileNames.forEach(filename => {
        console.log(filename)
       
    })
})