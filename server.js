const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'campuser',
        password: 'Root1234!',
        database: 'books_db'
    },
    console.log('connected to the db')
);


app.get('/books', (req, res) => {
    db.query('select * from favortive_books', (err, results) => {
        console.log(results)
        res.json(results);
    });
});




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});