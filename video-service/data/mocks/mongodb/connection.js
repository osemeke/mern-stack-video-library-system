// start mongodb on windows
// if not exist, create path C:\data\db
// in terminal run mongod.exe in C:\Program Files\MongoDB\Server\6.0\bin
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('MongoDb connected!');
})

module.exports = database