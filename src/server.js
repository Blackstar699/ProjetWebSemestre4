const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
const port = 3307;

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
});

app.listen(port, () => {
    console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
    pool.query(`select * from netflix_like.users`, (err, rows) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(rows);
        }
    });
});

app.post('/api/users', (req, res) => {
    let ID_user = req.body.ID_user;
    let pseudo = req.body.pseudo;
    let password = req.body.password;
    let data = [ID_user, pseudo, password];
    pool.query(`INSERT INTO netflix_like.users(ID_user, pseudo, password) VALUES (?, ?, ?)`, data, (err, results, fields) => {
        if(err){
            throw err;
        }
        res.end(JSON.stringify(results));
    });
});