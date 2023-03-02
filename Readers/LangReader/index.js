const path = require('path')
const FileReader = require("../../FileReader")
class LangReader {
    PATH = "Locale"
    Locale = "ru-RU"
    Lang = {reaction:[],reagent:[]}
    constructor(ResPath){
        this.PATH = path.join(ResPath,this.PATH,this.Locale)
        FileReader.readAllFiles(this.PATH,(Path,type)=>{
            if(type !== "ftl") return
            for (let o of FileReader.readTextFile(Path).split("\r\n")){
                const splited = o.split(" = ")
                if(splited[1] == undefined) continue
                this.Lang[splited[0]] = splited[1]
            }
                
            
        })
    }
}

module.exports = LangReader