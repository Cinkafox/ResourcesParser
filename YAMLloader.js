const yaml = require('js-yaml');
const fs = require('fs');

const schema = new yaml.Schema([
    new yaml.Type('!type:ExplosionReactionEffect', { kind: 'mapping' }),
    new yaml.Type('!type:SmokeAreaReactionEffect', { kind: 'mapping' }),
    new yaml.Type('!type:FoamAreaReactionEffect', { kind: 'mapping' }),
    new yaml.Type('!type:CreateGas', { kind: 'mapping' }),
    new yaml.Type('!type:CreateEntityReactionEffect', { kind: 'mapping' }),
    new yaml.Type('!type:PopupMessage', { kind: 'mapping' }),
])

module.exports = (path) => { return yaml.load(fs.readFileSync(path, 'utf8'), { schema}) }
