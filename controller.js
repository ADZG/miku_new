var formidable=require("formidable")
var datamoduls=require("./datamodules")
var path=require("path")
exports.getIndex=(req,res)=>{
    res.render("index.ejs")
}
exports.getSign=(req,res)=>{
    res.render("signIn.ejs")
}

// 文件上传
exports.uploadfile=(req,res)=>{
    // 启用文件管理模块
    var form = new formidable.IncomingForm()
    // 设置文件上传的目录
    form.uploadDir=__dirname+"/public/images"
    form.keepExtensions=true//保留文件名称
    // 解析请求中传入的文件数据
    form.parse(req, function (err, fields, files) {
        // 第一个参数：请求报文对象，因为它需要传递过来的数据
        // err: 错误信息对象
        // fileds: 传递的普通的键值对--对象
        // files: 文件存储之后的相关信息
        if(err){
            res.json({
                code:200,
                msg:"上传失败"
            })
        }else{
            // 启用路径path的path.basename可以获取文件路径的最后一截，也就是文件名
            var filename=path.basename(files.img.path)
            console.log(files)
            res.json({
                code:200,
                img:filename
            })
        }
    });
}

//注册
exports.signIn=(req,res)=>{
    console.log(req.body)
    datamoduls.signInData(req.body,(err)=>{
        if(err){
            res.json({
                code:201,
                msg:"注册失败"
            })
        }else{
            res.json({
                code:200,
                msg:"注册成功"
            })
        }
    })
}