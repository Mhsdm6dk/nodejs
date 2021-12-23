
const db=require('../models');
const categoryModel = require('../models/categoryModel');
class CategoryController{
    index(req,res){
        categoryModel.get(function(data){
            res.json(data);
        })
        
    }
    post(req,res){
        const name=req.body.name;
        categoryModel.post(name,(data)=>{
            res.json(data);
        })
    }
    delete(req,res){
        const id=req.params.id;
        categoryModel.delete(id,(data)=>{
            res.json(data);
        })
    }
    put(req,res){
        const data=req.body;
        categoryModel.put(data,(data)=>{
            res.json(data);
        })
    }
}
module.exports=new CategoryController;