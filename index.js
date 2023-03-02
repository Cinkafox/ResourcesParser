const RESPATH = "Resources"

const LangReaderClass = require("./Readers/LangReader")
const PrototypeReaderClass = require("./Readers/PrototypeReader")

const LangReader = new LangReaderClass(RESPATH)
const PrototypeReader = new PrototypeReaderClass(RESPATH,LangReader)


    
