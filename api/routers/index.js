const { xacthucDangnhap } = require("../middleware/xacthuc");
const categoryRouter = require("./category");
const customerRouter = require("./customer");
const itemRouter = require("./item");
const oderRouter = require("./oder");
const oder_itemRouter = require("./oder_item");

module.exports=function router(app){
    app.use('/item',itemRouter);
    app.use('/customer',customerRouter);
    app.use('/category',categoryRouter);
    app.use('/oder',xacthucDangnhap,oderRouter);
    app.use('/oder_item',oder_itemRouter);
}