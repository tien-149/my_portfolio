const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, Name, Publisher, Avatar, Place, AlterEgo, Team FROM tbl_favorite_card";


    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { people: result }); //we can change the key but we had to keep the result
    })
})

router.get('/users/:id', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');
    console.log(req.params.id); //1 2 3 or whatever comes after the slach

    let query = `select * from tbl_favorite_characters where characterID="${req.params.id}"`;


    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array
            // convert the social property into an array before you send it thru
        // render the home view with dynamic data
        // result[0].social=result[0].social.split(",").map(function(item){
        //     item = item.trim();
        //     //item.trim() remove any empty white space from the text

        //     return item;
        // })

        console.log("after trim/conversion:", result[0]);
        //remder the home view with dynamic data
        res.json(result[0]);

        // res.render('home', { people: result });
         //we can change the key but we had to keep the result
    })
})

module.exports = router;


//type show table => show 2 table;
// describe tablename
// Change the data for that table
//updata table_myadmin
