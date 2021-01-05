const Logger = require('./logger_guard');
const dbLogger = Logger('DB')
dbLogger.verbose('This is a verbose message')