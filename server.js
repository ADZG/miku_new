var express=require("express")
var app=new express()
var ejs=require("ejs")
var router=require("./router")
var bodyParser=require("body-parser")
app.listen(6789,()=>{
    console.log("http://127.0.0.1:6789")
})

// 静态资源托管  html只能写public下面的目录 不能包含public文件名，否则重名
// 这里前面的/public 斜线要写，后面的目录文件不写/
app.use("/public",express.static("public"))

// 启用ejs引擎 并且托管路径
app.set("view engine","ejs")
app.set("views",__dirname+"/views")

// 设置中间件，处理所有的post请求发过来的参数，并且转化为一个对象
app.use(bodyParser.urlencoded({ extended: false }))

// 跨域
var allow = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
}
app.use(allow)

// 启用路由模块
app.use(router)

