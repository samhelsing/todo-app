const mongoose = require("mongoose")
const {Schema} = mongoose;

const mongooseSchema = new Schema({
    text: {
        type: String,
        require: true
    }
});

const UserModel = mongoose.model("TodoSchema", mongooseSchema)
module.exports = UserModel