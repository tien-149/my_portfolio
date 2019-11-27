const express = require('express');
const path = require('path');
const hbs = require('hbs');

// set the port
const port = process.env.PORT || 5050;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index')); //this "/" one means index.js
app.use((req, res, next)=>{
    var err = new Error('Not Found');
    err.status = 404;
    err.customMessage="Something just happen!";
    next(err);
})

app.use((err, req, res, next) =>{
    res.render('error',{data: err, layout: 'errorPage'})
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})
