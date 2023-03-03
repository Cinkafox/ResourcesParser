const Paths = require("../../../Paths")
const path = require("path")

class SpriteComponent{
    SpritePath = ""
    Layers = []

    Read(ComponentItem){
        if(ComponentItem.sprite){
            this.SpritePath = ComponentItem.sprite
            this.Layers.push(this.LayerReader(ComponentItem))
        }
        if(ComponentItem.layers) 
            for(const LayerItem of ComponentItem.layers){
                const Layer = this.LayerReader(LayerItem)
                if (Layer) this.Layers.push(Layer)
            }
                
        return { ...this.Layers }
    }

    LayerReader(SpriteItem){
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