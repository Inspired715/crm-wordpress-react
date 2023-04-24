const express = require('express');
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mock = require('./mock.up')

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gatewayagencydev@gmail.com',
        pass: 'jpcakespsoujbzpr'
    }
});

const cors = require('cors');
const corsOpts = {
    origin: '*'
};
  
app.use(cors(corsOpts));

const mysql = require('mysql');
const connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'sammy',
    // password: 'password',
    // database: 'CRM'
    host: 'localhost',
    user: 'gateway',
    password: 'gatewayagency',
    database: 'CRM'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

app.post("/login", (req, res) => {
    let email = req.body.email;
    let pwd = req.body.password;
    let sql = `SELECT * from c_user where email='${email}' and verify=1 and first_name != '' and last_name != ''`;
    connection.query(sql, (err, rows) => {
        if (err) throw err;

        if(rows.length == 1){
            if(pwd == rows[0].password)
                res.send(JSON.stringify({message: 'success', status:0, user:rows[0]}));
            else
                res.send(JSON.stringify({message: "Wrong password!", status:1}));
        }else{
            res.send(JSON.stringify({message: "Please create account!", status:2}));
        }
    });
});

app.post("/signup", (req, res) => {
    let email = req.body.email;
    let pwd = req.body.password;
    let token = Math.floor(10000 + Math.random() * 90000);
    let sql = `select * from c_user where email='${email}' and verify=1 and first_name != '' and last_name != ''`;
    connection.query(sql, (err, rows) => {
        if(rows.length === 0){
            sql = `insert into c_user (email, password, token, verify, first_name, last_name) values('${email}', '${pwd}', '${token}', 0, '', '')`;
            connection.query(sql, (err, rows) => {
                if (err) throw err;
                var mailOptions = {
                    from: 'gatewayagencydev@gmail.com',
                    to: email,
                    subject: 'Verify Code',
                    text: `G-${token}`
                };
                
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        res.send(JSON.stringify({status:1, message:`${error}`}));
                    } else {
                        res.send(JSON.stringify({status:0, message:"Please check your email."}));
                    }
                });
            });
        }else{
            res.send(JSON.stringify({status:1, message:`User is already existed`}));
        }
    })
    
});

app.post("/verify", (req, res) => {
    let email = req.body.email;
    let verifyCode = req.body.verifyCode;
    let sql = `select * from c_user where email='${email}' and token='${verifyCode}'`;
    connection.query(sql, (err, rows) => {
        if (err) throw err;
        if(rows.length == 1){
            sql = `update c_user set verify=1 where email='${email}' and token='${verifyCode}'`;
            connection.query(sql, (err, rows) => {});
            res.send(JSON.stringify({status:0, message:`success`}));
        }else{
            res.send(JSON.stringify({status:1, message:`Wrong Code!`}));
        }
    });
});

app.post("/sendCode", (req, res) => {
    let token = Math.floor(10000 + Math.random() * 90000);
    let email = req.body.email;
    sql = `update c_user set verify=0, token='${token}' where email='${email}'`;
    connection.query(sql, (err, rows) => {
        var mailOptions = {
            from: 'gatewayagencydev@gmail.com',
            to: email,
            subject: 'Verify Code',
            text: `G-${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.send(JSON.stringify({status:1, message:`${error}`}));
            } else {
                res.send(JSON.stringify({status:0, message:"Please check your email."}));
            }
        });
    });
});

app.post("/update", (req, res) => {
    let first = req.body.first;
    let last = req.body.last;
    let email = req.body.email;
    let token = req.body.token;

    let sql = `update c_user set first_name='${first}', last_name='${last}' where email='${email}' and verify=1 and token='${token}'`;
    connection.query(sql, (err, rows) => {
        res.send(JSON.stringify({status:0, message:"success"}));
    });
})

app.post("/welcome", (req, res) => {
    let email = req.body.email;
    let sql = `delete from c_user where email='${email}' and (first_name == '' OR last_name == '')`;
    connection.query(sql, (err, rows) => {
        sql = `SELECT * from c_user where email='${email}' and verify=1 and first_name != '' and last_name != ''`;
        connection.query(sql, (err, rows) => {
            res.send(JSON.stringify({status:0, message:"success", user: rows[0]}));
        });
    });
})

app.post("/get_home", (req, res) => {
    res.send(JSON.stringify(mock));
})

app.post("/updateAccount", (req, res) => {
    let email = req.body.email;
    let pwd = req.body.password;
    let avatar = req.body.avatar;
    let phone = req.body.phone;

    let sql = `update c_user set password='${pwd}', avatar='${avatar}', phone='${phone}' where email='${email}' and verify=1`;
    connection.query(sql, (err, rows) => {
        res.send(JSON.stringify({status:0, message:"success"}));
    });
})

app.use(express.json());

app.listen(4000, () => {
    console.log(`Server is running on ${3001}`)
})
