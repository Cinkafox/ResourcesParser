class reaction{
    Reactions = {}
    Add_item(item){
        let reactants = {}
        for (let a of Object.keys(item.reactants)){
            reactants[a] = item.reactants[a].amount
        }
        this.Reactions[item.id] = reactants
    }
}

module.exports = reaction