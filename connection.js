const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const password = "DB2003sai";
const dbName = "mini_message_board";
const mongoUri = `mongodb+srv://shanmukh:${password}@atlascluster.xvry0av.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=AtlasCluster`;

async function makeConnection() {
    try {
        await mongoose.connect(mongoUri);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = makeConnection;
