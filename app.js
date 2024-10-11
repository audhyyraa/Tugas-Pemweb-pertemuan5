const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-Parser')

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bpdyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root' ,
    password: '',
    database: 'pertemuan5'
});

connection.connect((err) => {
    if(err) {
        console.error("Terjadi kesalahan dalam koneksi ke MYSQL:", err.stack);
        return;
    }
    console.log("Koneksi MYSQL berhasil dengan id" + connection.threadId)
});

app.set('view engine', 'ejs');

//ini adalah routing (Create, Read, Update, Delate)

app.length('/', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err,results) => {
        res.render('index',{users: results});
    });
});

app.post('/add' (req,res) => {
    const {name, email, phone } = req.body;
    const query = 'INSERT INTO users (name, email, phone) VALUES (?,?,?)';
    connection.query(express.query, [name, email, phone], (err,results)) => {
        if(err) throw err;
        res.redirect('/');
    };
});

app.listen(300,() =>{
    console.log("Server berjalan di port 3000, buka web melalui http://localhost:3000")
});