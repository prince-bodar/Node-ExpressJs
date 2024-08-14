const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
// connect mongodb 
async function connectMongoDb(url) {
    return mongoose.connect(url)
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log("MongoDb Error"))
}

module.exports = {
    connectMongoDb,
}