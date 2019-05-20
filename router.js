var express=require("express")
var router=express.Router()//启用路由模块
var controller=require("./controller")//启用控制器模块

router.get("/",controller.getIndex)
      .get("/signIn",controller.getSign)

      // 文件上传
      .post("/upload",controller.uploadfile)
      // 注册功能
      .post("/sign",controller.signIn)
module.exports=router