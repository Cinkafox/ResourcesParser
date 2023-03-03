const Paths = require("./Paths")

const LangReaderClass = require("./Readers/LangReader")
const PrototypeReaderClass = require("./Readers/PrototypeReader")
const MapReaderClass = require("./Readers/MapReader")

const LangReader = new LangReaderClass()
const PrototypeReader = new PrototypeReaderClass(LangReader)
const MapReader = new MapReaderClass(PrototypeReader)

    
