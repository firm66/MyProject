$(document).ready(function(){
    $("#tab li:eq(0)").click(function(){
        $(".content_one").show();
        $(".content_two").hide();
        $(".content_three").hide();
    });
    $("#tab li:eq(1)").click(function(){
        $(".content_one").hide();
        $(".content_two").show();
        $(".content_three").hide();
    });
     $("#tab li:eq(2)").click(function(){
        $(".content_one").hide();
        $(".content_two").hide();
        $(".content_three").show();
    });
})