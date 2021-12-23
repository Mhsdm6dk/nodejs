const db=require('../models/index');
const crypto=require('crypto-js');
class Xacthuc{
    xacthucCustomer(req,res,next){
        if(!req.body.username || !req.body.password){
            res.status(500).json([]);
        }
        else{
            next();
        }
    }
    xacthucCustomerpost(req,res,next){
        db.query("select * from customer where username=?",req.body.username,(err,respone)=>{
            if(err) throw err;
            if(respone.length>0){
                res.status(500).json([]);
            }
            else{
                next();
            }
        })
    }
    xacthucCustomer2(req,res,next){
        if(!req.body.id||!req.body.username || !req.body.password || !req.body.name || !req.body.email || !req.body.telephone || !req.body.address){
            res.status(500).send("error");
        }
        else{
            next();
        }
    }
    xacthucDangnhap(req,res,next){
        if(!req.cookies.user){
            res.status(404).send("not found");
        }
        else{
            let str=crypto.AES.decrypt(req.cookies.user,'mhsdm6dk');
          
            db.query('select * from customer where username=?',str.toString(crypto.enc.Utf8),(err,respone)=>{
                if(err) throw err;
                if(respone.length>0){
                    next();
                }
                else{
                    res.status(404).send("not found");
                }
            })
        }
    }
    
    xacthucAdmin(req,res,next){
        if(!req.cookies.user){
            res.status(404).send("not found");
        }
        else{
            let str=crypto.AES.decrypt(req.cookies.user,'mhsdm6dk');
            if(str.toString(crypto.enc.Utf8)=="hanhtshh"){
                next();
            }
            else{
                res.status(404).send("not found");
            }
        }
    }
}
module.exports=new Xacthuc;