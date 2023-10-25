const mongoose = require("mongoose");

exports.initialize = async (res) => {

    const mongoOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 50,
        minPoolSize: 10,
        socketTimeoutMS: 30000,
        maxIdleTimeMS: 60000
    };

    const dbUri = "mongodb+srv://maroof_malik_atlas:o9lCbi62cGB2Gf0I@cluster0.ujsm8gk.mongodb.net/pesto?retryWrites=true&w=majority"
    try {
        await mongoose.connect(`${dbUri}`, mongoOptions);
        console.log('Connect to MongoDb')
    } catch (error) {
        console.log('error', error)
    }
}