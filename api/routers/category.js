const express=require('express');
const categoryController = require('../controllers/categoryController');
const xacthuc=require('../middleware/xacthuc');
const categoryRouter=express.Router();
categoryRouter.get('/',categoryController.index);
categoryRouter.post('/',xacthuc.xacthucAdmin,categoryController.post);
categoryRouter.delete('/:id',xacthuc.xacthucAdmin,categoryController.delete);
categoryRouter.put('/',xacthuc.xacthucAdmin,categoryController.put);
module.exports=categoryRouter;