class reaction{
    Reactions = {}
    Add_item(item){
        console.log(item.products ? item.products : item.effects)
    }
}

module.exports = reaction