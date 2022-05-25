const mongoose = require('mongoose')

mongoose.connect("mongodb://dbUser:dbUser123@cluster0.ocptv.mongodb.net/?retryWrites=true&w=majority")
mongoose.Promise = global.Promise

module.exports = mongoose