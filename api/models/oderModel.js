const db=require('./index');
const crypto =require('crypto-js');
class OderModel{
    get_oderitem(oder_code,callback){
        db.query('select * from oder_item where code=?',oder_code,(err,res)=>{
            if(err) throw err;
            callback(res);
        })
    }
    get(customer_username,callback){
       if(customer_username!="hanhtshh"){
        db.query('select oder.code,oder.cost,oder.oder_date,oder.customer_id from oder inner join customer on oder.customer_id=customer.id where customer.username=?',customer_username,(err,respone)=>{
            if(err) throw err;
            db.query('select oder_item.oder_code,oder_item.item_id,item.name,item.image,item.describes,item.price,item.category_id,oder_item.quantity from oder_item inner join item on oder_item.item_id=item.id',(err,res)=>{
                if(err) throw err;
                callback(respone,res);
            });
        })
       }
       else{
        db.query('select oder.code,oder.cost,oder.oder_date,oder.customer_id,customer.name,customer.address,customer.email,customer.telephone from oder inner join customer on oder.customer_id=customer.id',customer_username,(err,respone)=>{
            if(err) throw err;
            db.query('select oder_item.oder_code,oder_item.item_id,item.name,item.image,item.describes,item.price,item.category_id,oder_item.quantity from oder_item inner join item on oder_item.item_id=item.id',(err,res)=>{
                if(err) throw err;
                callback(respone,res);
            });
        })
       }
    }
    post(data,customer_username,callback){
        db.query('select * from customer where username=?',customer_username,(err,res)=>{
            if(err) throw err;
            if(res.length>0 && res[0].id==data.customer_id){
                var today=new Date();
                var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" "+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
                db.query('insert into oder set code=?,cost=?,oder_date=?,customer_id=?',[data.code,data.cost,time,data.customer_id],(err,respone)=>{
                    if(err) throw err;
                    callback(data);
                })
            }
        })
    }
    delete(code,callback){
        db.query("delete from oder_item where oder_code=?",code,(err,res)=>{
            if(err) throw err;
            db.query('delete from oder where code=?',code,(err,respone)=>{
                if(err) throw err;
                callback("delete success");
            })
        })
    }
}
module.exports= new OderModel();