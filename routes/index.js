const express = require('express');
const router = express.Router();

// const sql = require('../utils/sql');
const connect = require('../utils/sqlConnect');


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

// router.get('/work', (req, res) => {
//     console.log('at the main route');

//     let query = "SELECT * FROM tbl_work";


//     sql.query(query, (err, result) => {
//         if (err) { throw err; console.log(err); }

//         res.render('work', { work: result }); //we can change the key but we had to keep the result
//     })
// })

router.get('/work', (req, res) => {

  // get the connection via the connection pool, and then run the query -> just one added step
  connect.getConnection((err, connection) => {
  if (err) { return console.log(error.message); }

  let query = "SELECT * FROM tbl_work";

  connect.query(query, (err, rows) => {
    connection.release(); // send this connection back to the pool

    if (err) {
      // will exit the function and log the error
      return console.log(err.message);
    }

    console.log(rows); // this should be your database query result

    // render our page
    res.render('work', {data: rows}); // whatever page and data you're rendering
  });
});
})

module.exports = router;
