const mysql=require('mysql');
const connect=mysql.createConnection({
    host:"localhost",
    database:"node",
    password:"",
    user:"root"
})
module.exports=connect;