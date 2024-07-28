const router = require('express').Router();
const Theatre = require('../models/instituteModel');

router.post('/add-institute',  async (req, res) => {
    try{
        const newInstitue = new Institue(req.body);
        await newInstitue.save();
        res.send({
            success: true,
            message: "New institue has been added!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});


// Update institute
router.put('/update-institute',  async (req, res) => {
    try{
        await Institue.findByIdAndUpdate(req.body.institueId, req.body);
        // console.log(req.body.theatreId)
        res.send({
            success: true,
            message: "Institute has been updated!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

// Delete institute
router.put('/delete-institute', async (req, res) => {
    try{
        await Institue.findByIdAndDelete(req.body.institueId);
        res.send({
            success: true,
            message: "The institute has been deleted!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});



module.exports = router;