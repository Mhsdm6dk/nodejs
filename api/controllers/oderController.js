const oderModel = require("../models/oderModel");
const crypto=require('crypto-js');
class OderController{
    get(req,res){
        let str=crypto.AES.decrypt(req.cookies.user,'mhsdm6dk').toString(crypto.enc.Utf8);
       oderModel.get(str,(oder,oder_item)=>{
           res.json(oder.map(item=>{
               return {...item,oder:oder_item.filter(it=>it.oder_code==item.code)};
           }));
       }) 
    }
    post(req,res){
        let str=crypto.AES.decrypt(req.cookies.user,'mhsdm6dk').toString(crypto.enc.Utf8);
        oderModel.post(req.body,str,(data)=>{
            res.json(data);
        })
    }
    delete(req,res){
        oderModel.delete(req.params.code,(data)=>{
            res.json(data);
        })
    }
}
module.exports=new OderController();