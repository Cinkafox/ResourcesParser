const LangReaderClass = require("./Readers/LangReader")
const PrototypeReaderClass = require("./Readers/PrototypeReader")
const MapReaderClass = require("./Readers/MapReader")
const ComponentReaderClass = require("./Readers/ComponentReader")
const Paths = require("./Paths")

const LangReader = new LangReaderClass()
const PrototypeReader = new PrototypeReaderClass(LangReader)
const MapReader = new MapReaderClass(PrototypeReader)

module.exports = {
    LangReader,PrototypeReader,MapReader,ComponentReaderClass,Paths
}
