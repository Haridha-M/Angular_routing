const express = require("express");
var mysql = require('mysql');
var cors = require('cors')
 

app = express()
app.use(express.json())
app.use(cors())
var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST ,
    user: process.env.DATABASE_USER ,
    password: process.env.DATABASE_PASSWORD ,
    database: process.env.DATABASE_NAME
});

connection.connect();

app.get('/getall', (req, res) => {
    connection.query('SELECT id,name,age,location,gender,color,hobbies,isActive from person', function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log('The solution is: ', results);
        res.end(JSON.stringify(results))
    });
})

app.get('/get', (req, res) => {
    connection.query('SELECT id,name,age,location,gender,color,hobbies,isActive from person where isActive=1', function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results);
    });
})
app.get('/getbyId/:id', (req, res) => {
    connection.query('SELECT id,name,age,location,gender,color,hobbies,isActive from person where id=?',[req.params.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results);
    });
})
app.post('/insert', (req, res) => {
    connection.query('insert into person (name,age,location,gender,color,hobbies) values (?,?,?,?,?,?)',[req.body.name,req.body.age,req.body.location,req.body.gender,req.body.color,req.body.hobbies], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results)
        // res.end(JSON.stringify(results))
    });
})
app.put('/update', (req, res) => {
    connection.query('update person set name=?,age=?,location=?,gender=?,color=?,hobbies=? where id=?',[req.body.name,req.body.age,req.body.location,req.body.gender,req.body.color,req.body.hobbies,req.body.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results)
        // res.end(JSON.stringify(results))
    });
})
app.put('/delete', (req, res) => {
    connection.query(`update person set isActive=0 where id=?`,[req.body.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results)
        // res.end(JSON.stringify(results))
        // DELETE FROM table_name WHERE condition;
    });
})
app.listen(4000, () => {
    console.log("listening port 4000")
})