const db=require('./index');
const crypto=require('crypto-js');
class CustomerModel{
    get(data,callback){
        db.query('select * from customer where username=?',data.username,(err,response)=>{
            if(err) throw err;
            callback(response);
        })
    }
    post(data,callback){
        db.query('insert into customer set name=?,username=?,password=?,address=?,email=?,telephone=?',["Trong",data.username,crypto.AES.encrypt(data.password,'mhsdm6dk').toString(),"Trong","Trong","Trong"],(err,respone)=>{
            if(err) throw err;
            callback(data);
        })
    }
    update(data,callback){
        db.query('update customer set name=?,username=?,password=?,address=?,email=?,telephone=? where id=?',[data.name,data.username,crypto.AES.encrypt(data.password,'mhsdm6dk').toString(),data.address,data.email,data.telephone,data.id],(err,respone)=>{
            if(err) throw err;
            callback(data);
        })
    }
    delete(id,callback){
        db.query('delete from customer where id=?',id,(err,respone)=>{
            if(err) throw err;
            callback(respone);
        })
    }
}
module.exports=new CustomerModel;