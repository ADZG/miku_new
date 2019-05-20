var mysql=require("mysql")
var connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'person_miku' 
})//创建服务器

// 注册
exports.signInData=(obj,callback)=>{
    var sql ="INSERT person(email,PASSWORD,img) VALUES(?,?,?)"
    connection.query(sql,[obj.email,obj.password,obj.img],(err)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}