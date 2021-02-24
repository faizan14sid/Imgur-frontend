const express = require("express");
const router = new express.Router();



//handling post request
router.post("/mens", async (req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save(); //this method is to return the promise
        res.status(100).send(insertMens); //used status propety to change the status code. 
    }catch (e){
        res.status(400).send(e);
    }   
})

//handling get request

router.get("/mens", async (req, res) => {
    try{
        const getMens = await MensRanking.find({}).sort({"ranking":1}); //sort the data by the ranking
        res.send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

//haldling get request of the individual

router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id:_id}); //{_id:_id} this is called destructuring, hence using one _id
        res.send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})

//handling patch request
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new:true //to get the updated data in the postman
        })
        res.send(getMen);
    }catch(e){
        res.status(500).send(e);//error code we have set as 500 because the server errors starts from 500
    }
})

//handling delete request of the individual by ID
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);
    }catch(e){
        res.status(500).send(e);//error code we have set as 500 because the server errors starts from 500
    }
})

module.exports = router;