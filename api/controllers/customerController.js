const customerModels = require("../models/customerModels");
const crypto=require('crypto-js');
class CustomerController{
    index(req,res){
        customerModels.get(req.body,(data)=>{
            if(data.length>0 && crypto.AES.decrypt(data[0].password,'mhsdm6dk').toString(crypto.enc.Utf8)==req.body.password){
                // res.setHeader('set-cookie',"user="+crypto.AES.encrypt(data[0].username,"mhsdm6dk").toString(),{
                //     httpOnly:false
                // });
                res.cookie('user',crypto.AES.encrypt(data[0].username,"mhsdm6dk").toString(),{
                    maxAge: 900000, httpOnly: true
                })
                res.status(200).json([{...data[0],password:crypto.AES.decrypt(data[0].password,'mhsdm6dk').toString(crypto.enc.Utf8)}]);
            }
            else{
                res.status(404).json("not found");
            }
            
        })
       
    }
    post(req,res){
        customerModels.post(req.body,(data)=>{
            res.status(200).json(data);
        })
    }
    delete(req,res){
        customerModels.delete(req.params.id,(data)=>{
            res.status(200).json(data);
        })
    }
    put(req,res){
        customerModels.update(req.body,(data)=>{
            res.status(200).json(data);
        })
    }
    logout(req,res){
        res.clearCookie('user');
        res.status(200).send('success');
    }
}
module.exports=new CustomerController;