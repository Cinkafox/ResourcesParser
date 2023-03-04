const ResourceParser = require("../index")
const fs = require("fs")

const MapBagel = ResourceParser.MapReader.Maps["bagel"]

let PNG = []
let MAP = []

let LAYERSA = { BelowFloor: [], FloorObjects: [], FloorTiles: [], ThickPipe: [], ThinPipe: [], ThickWire: [], ThinWire: [], Walls: [], WallMountedItems: [], WallTops: [], Objects: [], Mobs: [], Items: [], SmallObjects: [], Doors: [], Overdoors: [] }


for (let entityKey of Object.keys(MapBagel)) {
    const entity = MapBagel[entityKey]
    if (entity.components.Transform && entity.components.Sprite) {
        const Pos = entity.components.Transform.pos
        const Rot = entity.components.Transform.rot
        //console.log(entity.components.Sprite)
        for (const SpriteDepthKey of Object.keys(entity.components.Sprite)) {
            const Layers = entity.components.Sprite[SpriteDepthKey]
            if(Layers.length !== 0) 
                for (const SpriteKey of Object.keys(Layers)) {
                    const Sprite = Layers[SpriteKey]
                    //console.log(Sprite)
                    let pngindex = PNG.indexOf(Sprite)
                    if (pngindex == -1) pngindex = PNG.push(Sprite) - 1
                    //console.log(entity.components.Transform.pos, pngindex)
                    LAYERSA[SpriteDepthKey].push({ p: Pos, i: pngindex, r: Rot ? Rot.split(" ")[0] : 0 })
                    //MAP.push({ p: Pos, i: pngindex, r: Rot ? Rot.split(" ")[0] : 0 })
                }
        }
    }
}

for (const SpriteDepthKey of Object.keys(LAYERSA)) {
    const Layers = LAYERSA[SpriteDepthKey]
    if (Layers.length !== 0)
        for (const SpriteKey of Object.keys(Layers)) {
            MAP.push(Layers[SpriteKey])
        }
}

fs.writeFileSync("out.js","value = '"+JSON.stringify({PNG,MAP})+"'",{encoding:"utf-8"})