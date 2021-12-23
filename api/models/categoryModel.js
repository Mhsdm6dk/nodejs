const db=require('./index');
class CategoryModel{
    get(callback){
        db.query("select * from category",(err,res)=>{
            if(err) throw err;
            callback(res);
        })
    }
    post(data,callback){
        db.query("insert into category set name=?",data,(err,res)=>{
            if(err) throw err;
            callback({name:data});
        })
    }
    delete(id,callback){
        db.query("delete from item where category_id=?",id,(err,respone)=>{
            if(err) throw err;
            db.query("delete from category where id=?",id,(err,res)=>{
            if(err) throw err;
            callback("delete successfully!");
        })
        })
    }
    put(data,callback){
        db.query("update category set name=? where id=? ",[data.name,data.id],(err,res)=>{
            if(err) throw err;
            callback(data);
        })
    }
}
module.exports=new CategoryModel;