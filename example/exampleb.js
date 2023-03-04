var mydata = JSON.parse(value);
const ctx = document.getElementById("canvas").getContext("2d");
console.log(mydata)

const size = 50
let d = 2

const PNG = {}
for (const o of Object.keys(mydata.PNG)) {
    const image = new Image()
    image.src = "../Resources/Textures/" + mydata.PNG[o]
    PNG[o] = image
    image.onload = () => {
        d++
        if (d >= mydata.PNG.length){
            for (const o of Object.keys(mydata.MAP)) {
                const entity = mydata.MAP[o]
                if (!entity.p) continue
                const pos = entity.p.split(",")
                draw(PNG[entity.i], (pos[0]), (pos[1]) ,entity.r)
            }
        }
    }
}

function draw(img,x,y,r) {
    ctx.save()
    x = x*size
    y = y*size
    ctx.translate(x +16 , y +16 );
    ctx.rotate(r);
    //ctx.rotate(Math.PI)
    ctx.translate(-(x-16 ), -(y-16));
    ctx.drawImage(img, 0, 0, 32, 32,x,y, size, size);
    ctx.restore()
    
}


