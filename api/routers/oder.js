const express=require('express');
const oderController = require('../controllers/oderController');
const oderRouter=express.Router();
oderRouter.get('/',oderController.get);
oderRouter.post('/',oderController.post);
oderRouter.delete('/:code',oderController.delete);
module.exports=oderRouter;
