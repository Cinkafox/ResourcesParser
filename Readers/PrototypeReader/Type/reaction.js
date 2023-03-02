class reaction{
    Items = {}
    Add_item(item){
        if(!item.products) return
        let reactants = {}
        for (let a of Object.keys(item.reactants)){
            reactants[a] = item.reactants[a].amount
        }
        this.Items[item.id] = { reactants, col: item.products[item.id] ? item.products[item.id] : '1' }
    }
}

module.exports = reaction