const mongoose = require("mongoose");
const MONGOURL = "mongodb+srv://ishan_803:sprpn605@cluster0.xbjivw4.mongodb.net/"
const connectToMongo=()=>{
    mongoose.connect(MONGOURL);
    console.log("connected to mongo");
}

module.exports = connectToMongo;