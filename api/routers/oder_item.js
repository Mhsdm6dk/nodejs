const express=require('express');
const oder_itemController = require('../controllers/oder_itemController');
const oder_itemRouter=express.Router();
const xacthuc=require('../middleware/xacthuc');
oder_itemRouter.post('/',xacthuc.xacthucDangnhap,oder_itemController.post);
module.exports=oder_itemRouter;