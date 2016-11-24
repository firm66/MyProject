function selCourse(){
var arr=[['--选择专业--']
         ,["材料成型及控制工程","机械设计制造及其自动化","工业设计"]
         ,["自动化","电子信息工程","通信工程","电气工程及其自动化"]
    ,["计算机科学与技术","网络工程","软件工程","物联网工程","软件技术","动漫设计"]
         ,["土木工程","工程管理","建筑学","城乡规划"]
         ,["化学工程与工艺","应用化学","环境工程"]
         ,["食品科学与工程","生物工程","生物技术","动物医学"]
         ,["信息与计算科学","应用物理学"]
         ,["飞行技术","交通运输"]
         ,["会计学","财务管理","市场营销"]
         ,["社会工作","知识产权","广播电视编导"]
         ,["英语","商务英语",]]; /*定义二维数组*/
    
    var index=document.getElementById("selid").selectedIndex;
    var subselNode=document.getElementById("subselid");
    var courses=arr[index];  
    
    subselNode.options.length=0;
    for(var x=0;x<courses.length;x++){
        var optNode=document.createElement("option");
        optNode.innerText=courses[x];
        subselNode.appendChild(optNode); 
    }   
}
$(function(){
     $("#search").click(function(){
        $("#selid :selected").each(function(){
        alert(this.value);/*获取是哪个学院*/ 
        });
    }); 
})


//
//document.getElementById("search").onclick = function() { 
//	var request = new XMLHttpRequest();
//	request.open("GET", "server.php?number=" + document.getElementById("subselid").selectedIndex);
//	request.send();
//    
//	request.onreadystatechange = function() {
//		if (request.readyState===4) {
//			if (request.status===200) { 
//				document.getElementById("courseResult").innerHTML = request.responseText;
//			} else {
//				alert("发生错误：" + request.status);
//			}
//		} 
//	}
//}
















