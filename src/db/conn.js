const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/cricket", {
    
// to get rid off the deprecatipon warnings
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then (() => { //promises. which can return a value at any cost
    console.log("Connection is successful!!!");
}).catch((e) => {
    console.log("Connection is not successful!!")
})