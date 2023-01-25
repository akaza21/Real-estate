const {models,model, Schema, Promise} = require('mongoose')
const mongoose = require('mongoose')

const bookSchema = new Schema({
  name:String,
})

module.exports = mongoose.models.Book || mongoose.model('Book', bookSchema)