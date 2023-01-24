const mongoose = require('mongoose')

const MongoDb = 'mongodb://localhost:27017/'

const connectDb = async () => {
  try {
    await mongoose.connect(MongoDb, {
      
    })
    console.log('db success connect')
  } catch (err) {
    console.log('error connecting to database')
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDb