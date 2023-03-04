const Paths = require("../../../Paths")
const path = require("path")

class SpriteComponent{
    SpritePath = ""
    Layers = { BelowFloor: [], FloorObjects: [], FloorTiles: [], ThickPipe: [], ThinPipe: [], ThickWire: [], ThinWire: [], Walls: [], WallMountedItems: [], WallTops: [], Objects: [], Mobs: [], Items: [], SmallObjects: [], Doors: [], Overdoors: []}
    
    Read(ComponentItem,ParentComponentItem){
        const Depth = ComponentItem.drawdepth ? ComponentItem.drawdepth : "Objects"
        if(ComponentItem.sprite){
            this.SpritePath = ComponentItem.sprite
            this.Layers[Depth].push(this.LayerReader(ComponentItem))
        }
        if(ComponentItem.layers) 
            for(const LayerItem of ComponentItem.layers){
                const Layer = this.LayerReader(LayerItem)
                if (Layer) this.Layers[Depth].push(Layer)
            }
        if(ParentComponentItem && ParentComponentItem.Sprite){
            for(let o of Object.keys(ParentComponentItem.Sprite)){
                this.Layers[o] = [ ...ParentComponentItem.Sprite[o], ...this.Layers[o]]
            }
        }
        return this.Layers
    }

    LayerReader(SpriteItem){
        //if (SpriteItem.visible == 'false') return
        let LocalSpritepath = this.SpritePath
        if(SpriteItem.sprite) LocalSpritepath = SpriteItem.sprite
        if(!LocalSpritepath) return
        if (!SpriteItem.state){
            const PathToTexture = path.join(Paths.TEXTURES_PATH, LocalSpritepath, "meta.json")
            try{
                const Meta = require(PathToTexture)
                return this.PathJoin(LocalSpritepath,Meta.states[0].name)
            }catch{
                return
            }
        }
        return this.PathJoin(LocalSpritepath,SpriteItem.state)
    }

    PathJoin(SpritePath,state){
        return SpritePath + "/" + state + ".png"
    }
}

module.exports = SpriteComponent