const mongoose = require ("mongoose");

//initializing the schema
const menSchema = new mongoose.Schema({
    ranking : {
        type: Number, //key value pair
        required: true, //mandate request
        unique: true
    },

    name: {
        type: String,
        required:true,
        trim: true //to get rid of the spacing issue which is at the start or the end
    },

    dob: {
        type: Date,
        required: true,
        trim: true
    },

    country : {
        type: String,
        required: true,
        trim: true
    },

    totalScore : {
        type: Number,
        required: true,
        trim: true
    },

    event: {
        type: String,
        default: "ODI"
    },
})
//we are creating a new collection
const MensRanking = new mongoose.model("MensRanking", menSchema)

//exporting the schema to use it every where
module.exports = MensRanking;