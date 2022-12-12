const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const date = require('node-datetime');


//establish the connection

const db = mysql.createPool({
    host:"sql6.freemysqlhosting.net",
    user:"sql6584232",
    password:"C6fzCpncNj",
    database:"sql6584232"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/get",(req,res)=>{
    const sqlGet = "SELECT * FROM person";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});

app.post("/api/post",(req,res)=>{
    today = date.v=date.create().format('Y-m-d');
    const {name,age,gender,phno,email,timing} = req.body;
    console.log(name,req.body);
    const sqlInsert = "INSERT into person (name,age,gender,phno,email,session_time,date_enrolled,fee_status)"+"VALUES(?,?,?,?,?,?,"+"'"+today+"'"+",'0'"+")";
    db.query(sqlInsert,[name,age,gender,phno,email,timing],(error,result)=>{
        if (error){
            console.log(error);
        }
    });


});

app.listen(3306,()=>{
    console.log("Server is running on port 3306");
});