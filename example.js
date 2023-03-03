const ResourceParser = require("./index")
const fs = require("fs")

const MapBagel = ResourceParser.MapReader.Maps["bagel"]

fs.writeFileSync("out.json", JSON.stringify(MapBagel),{encoding:"utf-8"})