//获取当前时间
$(document).ready(function(){
    var dateNode=document.getElementById('date');
    var currentDate = new Date();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    attime=currentDate.getFullYear() + "年" + 
      (currentDate.getMonth() + 1) + "月" + 
      currentDate.getDate() + "日" + " " + 
     weekday[currentDate.getDay()]; 
    dateNode.innerHTML=(attime); //可以直接输出时间
 })
 
 //侧边栏展开闭合效果
var mainNode = document.getElementById("main");
var leftNode = document.getElementById("left");
var spanNode = document.getElementById("span");
leftNode.style.width = "14%";
mainNode.style.width = "85%";
spanNode.style.left="14%";
var status = "open";//为了控制侧拉栏开关
function alist(){
 var wid = parseInt(leftNode.style.width);
    var mwid = parseInt(mainNode.style.width);
    var spanLe=parseInt(spanNode.style.left);
    if (status == "open") {
        if (wid ==0  && mwid == 99&&spanLe==0) {
            status = "close";
            return;
        }
        if (wid > 0)
            wid--;
        if (wid < 0)
            wid++;
        if (mwid > 99)
            mwid--;
        if (mwid < 99)
            mwid++;
          if (spanLe > 0)
            spanLe--;
        if (spanLe < 0)
            spanLe++;
        spanNode.style.left=spanLe+"%";
        leftNode.style.width = wid + "%";
        mainNode.style.width = mwid + "%";
        $("#navigator").css("width","99%");
        setTimeout(alist, 10);
    } else if (status == "close") {
        if (wid == 14 && mwid == 85&&spanLe==14) {
            status = "open";
            return;
        }
        if (wid > 14)
            wid--;
        if (wid < 14)
            wid++;
        if (mwid > 85)
            mwid--;
        if (mwid < 85)
            mwid++;
           if (spanLe > 14)
            spanLe--;
        if (spanLe < 14)
            spanLe++;
        spanNode.style.left=spanLe+"%";
        leftNode.style.width = wid + "%";
        mainNode.style.width = mwid + "%";
         $("#navigator").css("width","85%");
        setTimeout(alist, 10);
    }
}

//菜单展开闭合效果
function blist(aNode) {
    var liNode = aNode.parentNode;
    var ulNode = liNode.getElementsByTagName("ul")[0];
    var clasName=ulNode.getAttribute("class");
    if (clasName=="close") {             //animate是一个动画函数中间的值就是动画结束后这个对象最后的高度，500是动画执行时间，单位是毫秒
        $(ulNode).animate({
            height: "130px"
        }, 500);
       ulNode.setAttribute("class","open");//加了一个class值，为了控制下拉条的开关，没有别的意义
    } 
    else if (clasName=="open") {
        $(ulNode).animate({
            height: "0px"
        }, 500);
        ulNode.setAttribute("class","close");
    }
    /*下面这里第一句是获得li(也就是a标签他爸)的全部li兄弟节点，下面这一整段是为了控制点另外一个按钮时，原来打开的下拉条关闭*/
       var l=$(liNode).siblings("li");
    for(var i=1;i<l.length;i++)
        {
            var uls=l[i].getElementsByTagName("ul")[0];
           $(uls).animate({
               height:"0px"
           },500);
            uls.setAttribute("class","close");
        }
}
$("#links>li:eq(6)").css("border-bottom","0px");
$(document).ready(function(){
    $(".act").click(function(){ 
$("#main").load($(this).text()+'.html'); 
$("#navigator").text("当前位置：首页>"+$(this).text());
});
       $("a:eq(1)").click(function(){
            $("#main").load($("a:eq(5)").text()+'.html');
        });
       $("a:eq(6)").click(function(){
            $("#main").load($("a:eq(8)").text()+'.html');
        });
       $("a:eq(11)").click(function(){
            $("#main").load($("a:eq(12)").text()+'.html');
         });
        $("a:eq(12)").click(function(){
            $("#main").load($(this).text()+'.html');
         });
        $("a:eq(16)").click(function(){
            $("#main").load($("a:eq(17)").text()+'.html');
        $("a:eq(21)").click(function(){
            $("#main").load($("a:eq(22)").text()+'.html');
        });
        });
});
/*退出登录*/
$(document).ready(function(){
   $("#loginout").click(function(){
    window.confirm("您确定要离开退出系统？")
        if(true){
            window.location.href="index.html";
        }
        else{
           
        }
   });
});


