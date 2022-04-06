//import router from express and congif it
const express= require('express');
const router = express.Router();

//make routes for router to use
const config = require('../config.js');
const sql = require('mysql');
 
//first, connect to "create" the database conneciton
//this info is stored in congi.js
let pool = sql.createPool({
    //pass connection to host user password and databse and then the port you want to communicate through
    connectionLimit: 20,
    host : config.host,
    user: config.user,
    password : config.password,
    database: config.database,
    port: 3306 // for windows users this is the port number. 
})

//when the router hits users, this route handler will fire and connect to the database and run a query. 
// this will select all users from our user databse. 
router.get('/getall', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;

        // run a query, get some results (or an error)
        connection.query('SELECT * FROM user', function(error, results) {
            connection.release();

            if (error) throw error;

            results.forEach(result => {
                delete result.password;
                delete result.last_name;

                if(!result.avatar){
                    result.avatar = "temp_avatar.jpg"
                }
            })

            console.log(results);
            res.json(results);
        })
    })
})
//this makes all the above code public
module.exports = router;