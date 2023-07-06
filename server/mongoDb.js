const mongoose = require('mongoose');


const databaseConnection = async () =>
{
    await mongoose.connect(process.env.mongoDB_URL)
}

module.exports = databaseConnection
