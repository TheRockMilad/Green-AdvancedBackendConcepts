const express = require("express");
// const coursesController = require("./../controllers/course");

const router = express.Router();

// session
router.get("/", (req,res) =>{
    req.session.counter += 1
    req.session.name = "milad"
    console.log(req.session);
    //توی هر مرورگر بری یکی برای همین میسازه 
    // و ارتباطی با هم ندارند
    res.json(`Loaded ${req.session.counter} times`)
});
router.get("/set", (req,res) =>{
    res.cookie('teken',"kdslfjse8ef57eieiefj39",{
        httpOnly : true,
        maxAge : 40000, // چهل ثانیه
    })
    res.json('cookie set successfully')
});

router.get("/get", (req,res) =>{
    console.log(req.cookies);
    res.json(req.cookies)
});
router.get("/:name", (req,res) =>{
    res.json({cookie : req.cookies[req.params.name]})
});
router.delete("/clear", (req,res) =>{
// router.get("/clear", (req,res) =>{
    for (let property in req.cookies) {
        res.clearCookie(property)
    }
    res.json({ message : "cookie remove successfully"})
});
 
module.exports = router;
 