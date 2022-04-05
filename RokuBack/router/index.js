//import router from express and congif it
const express= require('express');
const router = express.Router();

//make routes for router to use
const config = require('../config.js');
const sql = require('mysql');
 
//first, connect to "create" the database conneciton
//this info is stored in congi.js
let connection = sql.createConnection({
    //pass connection to host user password and databse and then the port you want to communicate through
    host : config.host,
    user: config.user,
    password : config.password,
    database: config.database,
    port: 3306 // for windows users this is the port number. 
})

//when the router hits users, this route handler will fire and connect to the database and run a query. 
// this will select all users from our user databse. 
router.get('/', (req, res) => {
    //connect to databse 
    connection.connect();

    // run a query, get some results (or an error)
    connection.query('SELECT * FROM user', function(error, results) {
        //createconnection automatically keeps you connected. connection.release makes it so the next person can make a coneection
        //conneciton.release();

        //if something is wrong here double check connection credentials above.
        if (error) throw error;

        //get rows of data back and show in console
        console.log(results);

        //turn results into a json object then send it back to whatever asked for the data (front end)
        res.json(results);

    })
})
//this makes all the above code public
module.exports = router;