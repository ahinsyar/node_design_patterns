const Logger_prototype = require('./logger_prototype')

function Logger(name){
    if(!(this instanceof Logger)){
        return new Logger_prototype(name);
    }
    this.name = name;   
}

module.exports = Logger;