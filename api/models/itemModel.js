const db=require('./index');
class ItemModel{
    get(callback){
        db.query("select item.id,item.name,item.image,item.describes,item.price,item.inventory,category.name as category from item inner join category on item.category_id=category.id",
        (err,respone)=>{
            if(err) throw err;
            callback(respone);
        })
    }
    post(data,callback){
        db.query("select * from category where name=?",data.category,(err,respone)=>{
            if(err) throw err;
            if(respone.length>0){
                db.query("insert into item set name=? ,image=? ,describes=? ,price=? ,inventory=? ,category_id=?",
                [data.name,data.image,data.describes,data.price,data.inventory,respone[0].id],(err,respone)=>{
                    if(err) throw err;
                    callback(data);
                })
            }
        })
    }
    delete(id,callback){
        db.query("delete from item where id=?", id, (err, respone) => {
             if(err) throw err;
            if(respone.affectedRows){
                callback("success");
            }
            else{
                callback("not found");
            }
        })
        
    }
    put(data,callback){
        db.query("select * from category where name=?",data.category,(err,respone)=>{
            if(err) throw err;
            if(respone.length>0){
                db.query("update item set name=?, image=?,describes=?,price=?,inventory=?,category_id=? where id=?",
                [data.name,data.image,data.describes,data.price,data.inventory,respone[0].id,data.id],(err,res)=>{
                    if(err) throw err;
                    callback(data);
                    
                })
            }
            else{
                callback(null);
            }
        })
    }
}
module.exports=new ItemModel