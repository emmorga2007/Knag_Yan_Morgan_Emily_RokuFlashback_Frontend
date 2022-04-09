const express = require('express');
const router = express.Router();

const config = require('../config.js');
const sql = require('mysql');

router.use(express.json());
router.use(express.urlencoded({ 'extended' : false }));

let pool = sql.createPool({
    conectionLimit: 20, //  max user connection is 20
    host : config.host,
    user : config.user,
    password : config.password,
    database : config.database,
    port : 3306 // mac:8889, windows: 3306
})

// ============== SIGNUP ==============
router.post('/signup', (req, res) => {
    console.log('hit sign up route');

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

// ============== GETONE ==============
router.post('/getone', (req,res) => {
    console.log(`hit the user route: the user is ${req.body}`);

    // conect to the database
    pool.getConnection((err, connection) => {
        if (err) throw err;

        // get the user from incoming route request with data passed from front end
        let currentUser = req.body,
            loginResult = {};

        // check if username and password match
        let query = `SELECT first_name, password FROM user WHERE first_name="${currentUser.username}"`;

        // run a query, get some result from input
        connection.query(query, function(error, user) {
            // make this connection avaliable to other people to connect
            connection.release();
        
            if (error) throw error;

            // login checking
            // if the user doesnt exist, prompt to add
            if (!user[0]) {
                loginResult.action = "add";
            }
            else if (user[0].password !== currentUser.password) {
                loginResult.field = "password"; // tell the UI which field is worng
                loginResult.action = "retry";
            }
            else {
                // username and pass word match
                loginResult.action = "authenticate";
            }

            res.json(loginResult);
        })
    })

})

// ============== GETALL ==============
// this route handler will match with any /users api call
router.get('/getall', (req, res) => {
    // conect to the database
    pool.getConnection((err, connection) => {
        if (err) throw err;

        // run a query, get some result from input
        connection.query('SELECT * FROM `user`', function(error, results) {
            // make this connection avaliable to other people to connect
            connection.release();
        
            if (error) throw error;

            // edit the result send to client
            results.forEach(result => {
                // prevent sending passwords
                delete result.password;
                delete result.last_name;
                // if the user has no avatar, assign a default one
                if (!result.avatar) {
                    result.avatar = "temp_avatar.jpg";
                }
            })

            console.log(results);
            //send data back in json file
            res.json(results);
        })
    })
})

module.exports = router;