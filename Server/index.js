const jwt = require("jsonwebtoken");
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
    host: 'localhost',
    user: 'gateway',
    password: 'gatewayagency',
    database: 'CRM',
    multipleStatements: true
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

var validateToken = function (req, res, next){
    const token = req.body.token;
    if (token == null) 
        return next({status:401, message:'Please login again!'});

    jwt.verify(token, 'kevinpineda_key_token_2023', function(err, decoded) {
        if (err) {
            res.status(200).json({
                status:1, message: "Please login again!",
            });
        }
        else {
            req.body.user_id = decoded.user.id;
            req.body.email = decoded.user.email;
            req.body.token = decoded.user.token;
            next();
        }
    });
}

app.use(validateToken);

app.post("/getUserList",  (req, res) => {
    let sql = `select avatar, created_at, concat(first_name, ' ', last_name) as name, email, phone from c_user where verify=1 and first_name != '' and last_name != ''`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, users: rows}));
    });
})

app.post("/getServiceKind",  (req, res) => {
    let sql = `select * from c_service_kind`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, kinds: rows}));
    });
})

app.post("/insertService",  (req, res) => {
    let user_id = req.body.user_id;
    let title = req.body.title;
    let description = req.body.description;
    let kind = req.body.kind;
    let price = req.body.price;
    let today = new Date();
    let date = today.toISOString().split('T')[0];
    let sql = `insert into c_services (kind, user_id, price, description, title, created_at) values(${kind}, ${user_id}, ${price}, '${description}', '${title}', '${date}')`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
            res.send(JSON.stringify({status:0, message: "Successfully registed!."}));
    });
})

app.post("/getServiceList",  (req, res) => {
    let sql = `select s.*, u.email, k.name as service from c_services s left join c_user u on s.user_id=u.id left join c_service_kind k on s.kind=k.id`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, service: rows}));
    });
})

app.post("/updateAccount", (req, res) => {
    let email = req.body.email;
    let pwd = req.body.password;
    let avatar = req.body.avatar;
    let phone = req.body.phone;
    let sql = '';
    if(pwd !== '')
        sql = `update c_user set password='${pwd}', avatar='${avatar}', phone='${phone}' where email='${email}' and verify=1`;
    else
        sql = `update c_user set avatar='${avatar}', phone='${phone}' where email='${email}' and verify=1`;
    
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else{
            let sql = `SELECT * from c_user where email='${email}' and verify=1 and first_name != '' and last_name != ''`;
            connection.query(sql, (err, rows) => {
                if (err) throw err;
                
                const token = jwt.sign(
                    { user: rows[0]}, 'kevinpineda_key_token_2023',
                    {
                        expiresIn: "12h",
                    }
                );
                
                res.send(JSON.stringify({message: 'Successfully updated.', status:0, email: rows[0].email, token:token, name:rows[0].first_name + " " + rows[0].last_name, phone: rows[0].phone, avatar:rows[0].avatar}));
            });
        }
    });
})

app.post("/getSalesList",  (req, res) => {
    let sql = `select u.id,s.created_at, concat(u.first_name, ' ', u.last_name) as name, 
                u.email, u.phone, concat(ck.name, '-', cs.title) as service, cs.price from c_sales s 
                left join c_user u on s.user_id=u.id 
                left join c_services cs on s.service_id=cs.id 
                left join c_service_kind ck on cs.kind=ck.id
                where s.paid=1`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else{
            let result = rows.reduce((temp, obj) => {
                const key = obj['email'];
                if (!temp[key]) {
                    temp[key] = [];
                }
                // Add object to list for given key's value
                temp[key].push(obj);
                return temp;
             }, {});

            res.send(JSON.stringify({status:0, sales: result}));
        }
        
    });
})

app.post("/getBannerData",  (req, res) => {
    let user_id = req.body.user_id;
    let sql = `SET @row_number = 0;
                select a.* from (select (@row_number:=@row_number + 1) AS num, a.* from (
                select cs.user_id, sum(cs.price) as price, min(s.created_at) as min_date, max(s.created_at) as max_date 
                from c_sales s 
                left join c_services cs on s.service_id=cs.id 
                where s.paid=1 GROUP BY cs.user_id ORDER BY price desc) a) a 
                where a.user_id=${user_id}`;

    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, banner: rows[1]}));
    });
})

app.post("/getLeaderBoard",  (req, res) => {
    let sql = `set @row_num=0;
                select a.*, (@row_num := @row_num+1) as ranking, concat(u.first_name, ' ', u.last_name) as name, u.avatar 
                from (select sum(cs.price) as price, cs.user_id 
                from c_sales s left join c_services cs on s.service_id=cs.id 
                where s.paid=1 GROUP BY cs.user_id ORDER BY price desc)a 
                left join c_user u on a.user_id=u.id`;

    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, raking: rows[1]}));
    });
})

app.post("/getChartData",  (req, res) => {
    let sql = `set @row_num=0;
                select a.*, (@row_num := @row_num+1) as ranking, concat(u.first_name, ' ', u.last_name) as name, u.avatar 
                from (select sum(cs.price) as price, s.user_id 
                from c_sales s left join c_services cs on s.service_id=cs.id 
                where s.paid=1 GROUP BY s.user_id ORDER BY price desc)a 
                left join c_user u on a.user_id=u.id`;

    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, raking: rows[1]}));
    });
})

app.use(express.json());

app.listen(4000, () => {
    console.log(`Server is running on ${3001}`)
})
