const oder_itemModel = require("../models/oder_itemModel");

class Oder_itemController{
    post(req,res){
        oder_itemModel.post(req.body,(data)=>{
            res.status(200).json(data);
        })
    }

}
module.exports=new Oder_itemController();