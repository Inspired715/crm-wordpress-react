const jwt = require("jsonwebtoken");
const express = require('express');
let app = express.Router();
const connection = require('../database');
const transporter = require('../mail');

app.post("/login", (req, res) => {
    let email = req.body.email;
    let pwd = req.body.password;
    let sql = `SELECT * from c_user where email='${email}' and verify=1 and first_name != '' and last_name != ''`;
    connection.query(sql, (err, rows) => {
        if (err) throw err;

        if(rows.length == 1){
            if(pwd == rows[0].password){
                const token = jwt.sign(
                    { user: rows[0]}, 'kevinpineda_key_token_2023',
                    {
                        expiresIn: "12h",
                    }
                );
                res.send(JSON.stringify({message: 'Welcome, Successfully logined.', status:0, email: rows[0].email, token:token, name:rows[0].first_name + " " + rows[0].last_name, phone: rows[0].phone, avatar:rows[0].avatar}));
            }
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
            sql = `insert into c_user (email, password, token, verify, first_name, last_name, created_at, phone) values('${email}', '${pwd}', '${token}', 0, '', '', CURRENT_DATE(), '')`;
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
            res.send(JSON.stringify({status:0, message:`Welcome, Successfuly verifyed.`}));
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
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, message:"Welcome, Successfuly updated."}));
    });
})

app.post("/welcome", (req, res) => {
    let email = req.body.email;
    let sql = `delete from c_user where email='${email}' and (first_name = '' OR last_name = '')`;
    connection.query(sql, (err, rows) => {
        sql = `SELECT * from c_user where email='${email}' and verify=1 and first_name != '' and last_name != ''`;
        connection.query(sql, (err, rows) => {
            if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
            else
            res.send(JSON.stringify({status:0, message:"Welcome, Successful.", user: rows[0]}));
        });
    });
})

module.exports = app