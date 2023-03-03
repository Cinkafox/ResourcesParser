const path = require('path')
const FileReader = require("../../FileReader")
const Paths = require("../../Paths")
class LangReader {
    Locale = "ru-RU"
    Lang = {reaction:[],reagent:[]}
    constructor(){
        this.PATH = path.join(Paths.LOCALE_PATH,this.Locale)
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