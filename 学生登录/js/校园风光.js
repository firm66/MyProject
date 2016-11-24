$(document).ready(function() {
            var oBox = document.getElementById("box_08");
            var aUl = $("#box_08 ul");  /*不能和login页面里的重复*/
            var aImg = aUl[0].getElementsByTagName("li");
            var aNum = aUl[1].getElementsByTagName("li");
            var timer = play = null;
            var i = index = 0;

            //切换按钮
            for (i = 0; i < aNum.length; i++) {
                aNum[i].index = i;
                aNum[i].onmouseover = function () {
                    show(this.index)
                    
                }
            }

            //鼠标划过关闭定时器
            oBox.onmouseover = function () {
                clearInterval(play)
            };

            //鼠标离开启动自动播放
            oBox.onmouseout = function () {
                autoPlay()
            };

            //自动播放函数
            function autoPlay() {
                play = setInterval(function () {
                    index++;
                    index >= aImg.length && (index = 0);
                    show(index);
                }, 2000);
            }
            autoPlay(); //应用

            //图片切换, 淡入淡出效果
            function show(a) {
                index = a;
                var alpha = 0;
                for (i = 0; i < aNum.length; i++) aNum[i].className = "";
                aNum[index].className = "current";
                clearInterval(timer);

                for (i = 0; i < aImg.length; i++) {
                    aImg[i].style.opacity = 0;
                    aImg[i].style.filter = "alpha(opacity=0)";
                }

                timer = setInterval(function () {
                    alpha += 2;
                    alpha > 100 && (alpha = 100);
                    aImg[index].style.opacity = alpha / 100;
                    aImg[index].style.filter = "alpha(opacity = " + alpha + ")";
                    alpha == 100 && clearInterval(timer)
                }, 20);
            }
        });
$(document).ready(function(){
    $("#wrap_08 .scenery4_sign").hover(
        function () {
            $(this).css("border","2px solid cornflowerblue");
            $(this).children(".tushu").css("background-color","cornflowerblue");
        },
        function () {
            $(this).css("border","2px solid #b3cee9");
            $(this).children(".tushu").css("background-color","#b3cee9");
        });
})