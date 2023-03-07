const FileReader = require("../../FileReader")
const ComponentReader = require("../ComponentReader")
const Paths = require("../../Paths")

class MapReader {
    Maps = {}
    constructor(c) {
        const PATH = Paths.MAPS_PATH
        FileReader.readAllFiles(PATH, (Path, type,fileName) => {
            if (type !== "yml") return
            const obj = FileReader.readYAML(Path)
            let map = {}
            const CR = new ComponentReader(c)
            let Len = Object.keys(obj.entities).length
            for (let o of Object.keys(obj.entities)){
                const MapEntityItem = obj.entities[o]
                const ComponentsItem = CR.ComponentReader(c.TYPES.entity.Items[MapEntityItem.type])
                const ComponentsMap = CR.ComponentReader(MapEntityItem)
                if (ComponentsMap.GridAtmosphere) 
                    for (let o of Object.keys(ComponentsMap.GridAtmosphere.tiles)){
                        let tiles = ComponentsMap.GridAtmosphere.tiles
                        let tile = c.TYPES.tile.Items[obj.tilemap[tiles[o]]]

                        if(tile)
                        console.log(tile, obj.tilemap[tiles[o]])
                    }
                MapEntityItem.components = {...ComponentsItem,...ComponentsMap}
                map[o] = MapEntityItem
            }

            this.Maps[fileName.split(".")[0]] = map
        })
    }
}

module.exports = MapReader