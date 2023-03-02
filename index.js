const RESPATH = "Resources"

const LangReaderClass = require("./Readers/LangReader")
const PrototypeReaderClass = require("./Readers/PrototypeReader")
const MapReaderClass = require("./Readers/MapReader")

const LangReader = new LangReaderClass(RESPATH)
const PrototypeReader = new PrototypeReaderClass(RESPATH,LangReader)
const MapReader = new MapReaderClass(RESPATH,PrototypeReader.TYPES.entity.Items)

    
