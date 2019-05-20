$(function () {


    // 顶部字体 resize 当浏览器窗口调整的时候
    $(window).on("resize",function(){
        if ($(window).innerWidth() <= 750) {
            $(".navbar-nav a").css("font-size","12px")
        }else{
            $(".navbar-nav a").css("font-size", "14px")
        }
        
        // if ($(window).innerWidth() <= 767){
        //     $("<a href='#'>miku</a>").appendTo($(".navbar-header"))
        // }
    })
    // 切换栏
    $(".navbar-toggle").on("click",function(){
        $(this).css({ "background-color":"#40fffb"})
    })
    // 轮播图的跳转时间
    $('.carousel').carousel({
        interval: 3000
    })

    // 鼠标点击的时候,改变字体颜色，其他颜色排他，鼠标移除则恢复白色
    $(".navbar-nav a").click(function () {
        $(this).css({ "color": "#66CCFF" }).siblings().css({ "color": "#fff" })
    }).on("mouseout",function () {
        $(this).css({ "color": "#FFF" })
    })

    // 设置耳机菜单
    $("#miku-setting").on("click", function () {
        if ($(window).innerWidth() <= 750){
            $(".miku-sp").css({ "left": "0" });
            $(".miku-cen").css({ "position":"absolute","z-index":"-1"})

        } else if($(window).innerWidth() >750){
            $(".miku-sp").css({ "right": "0" });
        }
        $(".miku-sp").stop(false,true).slideToggle(1000)
    })
    $(".miku-sp li").on("click",function(){
        $(".miku-sp").stop(false,true).slideToggle(1000)
    })
    
    // 添加缩小后的结构
    
    // 二级菜单
    // $(".more").on("click",function(){
    //     var index=$(this).index()-1;
    //     $(".nav-list").eq(index).stop(false,true).slideDown(1000)
    // }).on("mouseleave",function(){
    //     $(".nav-list").stop(false, true).slideUp(500)
    // })
    // $(".nav-list").on("mouseleave",function(){
    //     $(".nav-list").stop(false,true).slideUp(500)
    // })
    // 随机颜色
    function randmoColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    // 播放器操作
    $(".medio video").on("timeupdate",function(){
       var time= parseInt($(".medio video")[0].currentTime / $(".medio video")[0].duration * 100)
        $(".progress-bar-striped").css({ "width": time + "%", "backgroundColor": randmoColor() })
    }).on("playing",function(){
        $(".medio").css({ "z-index": "1000","opacity":"1"})
    }).on("pause",function(){
        
    })
    // 设置nav的默认点击事件的颜色以及鼠标进入离开等事件的颜色
    $(".dropdown-toggle").on("click",function(){
        $(this).css("background-color","#2a2a2a")
        $(".dropdown-menu").css("background-color","#2a2a2a")
        $(".dropdown-menu li a").css("color", "#fff")
    })
    $(".dropdown-menu li a").on("mouseenter",function(){
        $(".dropdown-menu li a").css("background-color", "#2a2a2a")
    })
    
})
// timeupdate 事件在音频 / 视频（audio / video）的播放位置发生改变时触发
// var video=document.querySelector("video")
// video.ontimeupdate=function(){
    
// }