const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: '',
database: 'app_ecomerce'
});

db.connect(err => {
if (err) throw err;
console.log('Conectado a la base de datos MySQL');
});
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) throw err;
    res.json(results);
    });
    });
    
    app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
    });