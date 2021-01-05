const Logger_prototype = require('./logger_prototype')

function Logger(name){
    if(!new.target){
        return new Logger_prototype(name);
    }
    this.name = name;   
}

module.exports = Logger;