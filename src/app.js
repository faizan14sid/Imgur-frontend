const express = require("express");
const dotenv = require("dotenv");
require("../src/db/conn"); //calling the connection file from the main src file

//importing the schems model
const MensRanking = require("../src/models/mens");


const app = express();
const port = process.env.PORT || 8001;

//middleware
//Express doesn’t handle reading data from the <form> element on it’s own. We have to add another package called body-parser to gain this functionality.
app.use (express.json());
//haldling post request

app.post("./mens", async (req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        addingMensRecords.save();
    }catch (e){
        res.send(e);
    }
})



//first route to check if the get request is working. 
// app.get("/", async (req,res) => {
//     res.send("Hello world!!!")
// })

//check app is listening to the port(successful)

app.listen(port, () => {
    console.log('The connection is live at port number. 8001')
})