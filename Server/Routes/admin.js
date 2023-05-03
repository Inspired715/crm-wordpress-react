const jwt = require("jsonwebtoken");
const connection = require('../database');
const express = require('express');
let app = express.Router();

const validateToken = function (req, res, next){
    const token = req.body.token;
    if (token == null) {
        res.status(200).json({
            status:1, message: "Please login again!",
        });
    }

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

app.post("/getUserList", validateToken, (req, res) => {
    let sql = `select avatar, created_at, concat(first_name, ' ', last_name) as name, email, phone from c_user where verify=1 and first_name != '' and last_name != ''`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, users: rows}));
    });
})

app.post("/getServiceKind",  validateToken, (req, res) => {
    let sql = `select * from c_service_kind`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, kinds: rows}));
    });
})

app.post("/insertService",  validateToken, (req, res) => {
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

app.post("/getServiceList",  validateToken, (req, res) => {
    let sql = `select s.*, u.email, k.name as service from c_services s left join c_user u on s.user_id=u.id left join c_service_kind k on s.kind=k.id order by s.id desc`;
    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, service: rows}));
    });
})

app.post("/updateAccount", validateToken, (req, res) => {
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

app.post("/getSalesList",  validateToken, (req, res) => {
    let sql = `select u.id,s.created_at, concat(u.first_name, ' ', u.last_name) as name, 
                u.email, u.phone, concat(ck.name, '-', cs.title) as service, cs.price from c_sales s 
                left join c_user u on s.user_id=u.id 
                left join c_services cs on s.service_id=cs.id 
                left join c_service_kind ck on cs.kind=ck.id
                where s.paid=1 order by s.created_at`;
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

app.post("/getBannerData",  validateToken, (req, res) => {
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

app.post("/getLeaderBoard",  validateToken, (req, res) => {
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

app.post("/getChartData",  validateToken, (req, res) => {
    let curr = new Date;
    let firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    let lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));
    
    if(req.body.type === 1){
        firstday = new Date(curr.getFullYear(), curr.getMonth(), 1);
        lastday = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);       
    }
    
    firstday = firstday.toISOString().slice(0, 10);
    lastday = lastday.toISOString().slice(0, 10);

    let sql = `select a.selected_date as dates, IFNULL(b.price,0) AS price from (
        select * from (select adddate('1970-01-01',t4*10000 + t3*1000 + t2*100 + t1*10 + t0) selected_date from
        (select 0 t0 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t0,
        (select 0 t1 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t1,
        (select 0 t2 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t2,
        (select 0 t3 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t3,
        (select 0 t4 union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t4) v 
        where selected_date between '${firstday}' and '${lastday}') a 
        left join (select sum(cs.price) as price, s.created_at from c_sales s left join c_services cs on s.service_id=cs.id where s.paid=1 and  s.created_at >= '${firstday}' and s.created_at <= '${lastday}' GROUP BY s.created_at)b 
        on a.selected_date=b.created_at order by a.selected_date`;

    connection.query(sql, (err, rows) => {
        if (err) res.send(JSON.stringify({status:1, message:`${err}`}));
        else
        res.send(JSON.stringify({status:0, charts: rows}));
    });
})

module.exports = app