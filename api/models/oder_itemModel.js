const db=require('./index');
class Oder_itemModel{
    post(data,callback){
        db.query('insert into oder_item set oder_code=?,item_id=?,quantity=?',[data.oder_code,data.item_id,data.quantity],(err,respone)=>{
            if(err) throw err;
            callback(data);
        })
    }
}
module.exports=new Oder_itemModel();