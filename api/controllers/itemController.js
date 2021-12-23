const { data } = require("node-persist");
const itemModel = require("../models/itemModel");

class ItemController{
    index(req,res){
        itemModel.get((data)=>{
            res.json(data);
        })
    }
    post(req,res){
        itemModel.post(req.body,(data)=>{
            res.json(data);
        })
    }
    delete(req,res){
        itemModel.delete(req.params.id,(data)=>{
            res.json(data);
        })
    }
    put(req,res){
        itemModel.put(req.body,(data)=>{
            res.status(500).json(data);
        })
    }
}
module.exports=new ItemController;