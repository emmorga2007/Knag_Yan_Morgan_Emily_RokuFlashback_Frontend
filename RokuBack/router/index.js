//import router from express and congif it
const express= require('express');
const router = express.Router();

//make routes for router to use
const config = require('../config.js');
const sql = require('mysql');
 
// middleware to enable route to parse out the post request data
router.use(express.json());
router.use(express.urlencoded({ 'extended' : false })); // enables router to read queries like ?username="Mike"

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

// a route with /:text is a dynamic route
// what comes after the colon is a route parmeter
// can be used like a variable in your JS code

router.post('/signup', (req, res) => {
    console.log('hit add user route');

    let user = req.body;

    pool.getConnection((err, connection) => {
        if (err) throw err;

        let query = `INSERT INTO user(first_name, last_name, password, role, permissions, avatar) VALUES('${user.username}', 'test', '${user.password}', 0, 3, '')`;

        connection.query(query, (err, result) => {
            connection.release();

            if (err) throw err;

            console.log(result);

            res.json({action: 'added'});
        })
    })
});

// this is passing dynamic data to a route
router.post('/getone', (req, res) => {
    console.log(`hit the user route: the user is ${req.body}`)
    
    pool.getConnection((err, connection) => {
        if (err) throw err;

        // get the user frm the incoming route request (the data passed from the front end)
        let currentUser = req.body,
            //create an object to store the login attempt result (pass/fail)
            loginResult = {};

        let query = `SELECT first_name, password FROM user WHERE first_name="${currentUser.username}"`


        // run a query, get some results (or an error)
        connection.query(query, function(error, user) {
            connection.release();

            if (error) throw error;

            // if the user doesnt exist, prompt to add
            if (!user[0]) {
                loginResult.action = "add";
            } else if (user[0].password !== currentUser.password) {
                // above is cheking if they dont match
                loginResult.field = "password"; // tell the UI which field is wrong
                loginResult.action = "retry";
            } else {
                //user and password match
                loginResult.action = "authenticate";
            }

            res.json(loginResult);
        })
    })
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