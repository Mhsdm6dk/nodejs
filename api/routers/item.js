const express=require('express');
const itemController = require('../controllers/itemController');
const xacthuc=require('../middleware/xacthuc');
const itemRouter=express.Router();
itemRouter.get('/',itemController.index);
itemRouter.post('/',xacthuc.xacthucAdmin,itemController.post);
itemRouter.delete('/:id',xacthuc.xacthucAdmin,itemController.delete);
itemRouter.put('/',xacthuc.xacthucAdmin,itemController.put);
module.exports=itemRouter;