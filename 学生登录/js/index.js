function check(inputNode,regex,divId)
{
    var b=false;
    var divNode=document.getElementById(divId);
    if(regex.test(inputNode.value)){
        divNode.style.display="none";
        b=true;
    }
    else{
        divNode.style.display="block";
    }
    return b;
}
function checkIdentity(identityNode){     /*验证身份证号*/
     var regex=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
   return  check(identityNode,regex,"identitydiv");
}
function checkUser(userNode){       /*验证姓名*/
    var regex= /^[\u4e00-\u9fa5 ]{2,20}$/;        /*中文姓名*/
     return  check(userNode,regex,"userdiv");
}

   var code ; //在全局 定义验证码   
     function createCode()   
     {    
       code = "";   
       var codeLength = 4;//验证码的长度   
       var checkCode = document.getElementById("checkCode");   
       var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的       
       for(var i=0;i<codeLength;i++)   
       {        
       var charIndex = Math.floor(Math.random()*36);   
       code +=selectChar[charIndex];      
       }   
//       alert(code);   
       if(checkCode)   
       {   
         checkCode.className="code";   
         checkCode.value = code;   
       }       
     }       
      function checkAuthcode(authcodeNode)   
     {    
       var inputCode = document.getElementsByName("authcode")[0].value;     /*要写[0]*/
         var authcodediv=document.getElementById("authcodediv");
       if(inputCode.length <=0)   
       {   
          authcodediv.style.display="block";
          b=false;
       }   
       else if(inputCode != code )   
       {   
         authcodediv.style.display="block";
          createCode();//刷新验证码   
             b=false;
       }   
       else   
       {   
         authcodediv.style.display="none";
           b=true; 
       }   
         return b;   /*返回b的值，检查是true或false*/
       }   
function checkForm(formNode){
    with(formNode){
 if(checkIdentity(identity)&&checkUser(user)&&checkAuthcode(authcode)){
            event.returnValue=true;
          window.open('login.html');
     }
        else{
             event.returnValue=false;   
      }
    }
}





