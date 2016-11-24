 var _Pages = $('.page');
    var _Nav = $('#pagnation');
    function createLinks(){
        _Nav.append('<a href="#" id="prev">上一页</a>');
        for(var i=0;i<$('.page').length;i++){
            _Nav.append('<a href="#" class="numlink">'+(i+1)+'</a>');
        }
        _Nav.append('<a href="#" id="next">下一页</a>');
    }
    function process(now,_Prev,_Next){
        $('.page:eq('+now+')').css('display','block');
        $('.numlink:eq('+now+')').addClass('current');
        var total = parseInt($('.page').length - 1);
        if(now == 0){
            _Prev.hide();
            _Next.show();
        }
        else if(now == total){
            _Prev.show();
            _Next.hide();
        }
        else {
            _Prev.show();
            _Next.show();
        } 
    }
    function hideAll(){
        _Pages.css('display','none');
        $('.numlink').removeClass('current');
    }
    $(document).ready(function(){
        //set the first one display none
        $('.page:eq(0)').css('display','block');
        createLinks();
        $('.numlink:eq(0)').addClass('current');
        var _Next = $('#next');
        var _Prev = $('#prev');
        var _Link = $('.numlink');
        _Prev.hide();
        var now =  parseInt($('.numlink').index($('.current')));
        _Next.click(function(){
             hideAll();
             process(now+1,_Prev,_Next);
             now = parseInt($('.numlink').index($('.current')));
        });
        _Prev.click(function(){
            hideAll();
            process(now-1,_Prev,_Next);
            now = parseInt($('.numlink').index($('.current')));
        })
        _Link.click(function(){
            var that = $(this);
            hideAll();
            var which = that.index() - 1;
            process(which,_Prev,_Next);
            now = parseInt($('.numlink').index($('.current'))); 
        })
    })