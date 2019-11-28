const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get("/", (req, res) => {
  console.log("main route");
  res.render("home");
});
router.get("/home", (req, res) => {
  console.log("home page");
  res.render("home");
});
router.get("/contact", (req, res) => {
  console.log("contact page");
  res.render("contact");
});

router.get('/work', (req, res) => {
    console.log('at the main route');

    let query = "SELECT ID, Project, Role, Detail, Link FROM tbl_work";


    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        res.render('work', { work: result }); //we can change the key but we had to keep the result
    })
})

// router.get('/users/:id', (req, res) => {
//     console.log('at the main route');
//     console.log(req.params.id); //1 2 3 or whatever comes after the slach

//     let query = `select * from tbl_work where ID="${req.params.id}"`;


//     sql.query(query, (err, result) => {
//         if (err) { throw err; console.log(err); }

//         console.log(result); 
//         console.log("after trim/conversion:", result[0]);
//         //remder the home view with dynamic data
//         res.json(result[0]);

//     })
// })

module.exports = router;
