exports.loaded = false;
const a = require('./module_a');
module.exports = {
    aWasLoaded: a.loaded,
    loaded:true
};