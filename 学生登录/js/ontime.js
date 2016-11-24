 function openWindow() {
     /*var biao=doucument.getElementById("table_1");*/
     //alert(biao);
     window.open('./baodaofangshi/anshi.html', '_blank', 'width=900,height=300,menubar=no,toolbar=no,status=no,scrollbars=yes');
 }

 function qingjia() {
     window.open('./baodaofangshi/qingjia.html', '_blank', 'width=900,height=300,menubar=no,toolbar=no,status=no,scrollbars=yes');
 }

 function wait() {
     window.open('./baodaofangshi/wait.html', '_blank', 'width=900,height=300,menubar=no,toolbar=no,status=no,scrollbars=yes');
 }
 function giveup() {
     window.open('./baodaofangshi/giveup.html', '_blank', 'width=900,height=300,menubar=no,toolbar=no,status=no,scrollbars=yes');
 }

function greenway() {
     window.open('./baodaofangshi/greenway.html', '_blank', 'width=900,height=300,menubar=no,toolbar=no,status=no,scrollbars=yes');
 }
function submit(){
    
    /*var valu=document.getElementsByTagName('input').value;
    if(valu==" "){
    
        alert("请将信息填写完整");
    }*/
    var ad=document.getElementById("tel").value;
    if(ad.length!==11){
    
        alert("请输入正确的手机号！");
    }
}