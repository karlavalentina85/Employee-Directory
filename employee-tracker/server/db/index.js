const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/employee',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  ).catch(e => {
    console.error('Connection error', e.message)
})

  

//mongoose
//    .connect('mongodb://localhost/employee', { useNewUrlParser: true })
//    .catch(e => {
//        console.error('Connection error', e.message)
//    })

const db = mongoose.connection

module.exports = db
