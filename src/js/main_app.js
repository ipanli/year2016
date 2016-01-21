PD(function(){
    PD('body,html').on('touchmove touchstart', function (event) {
        event.preventDefault();
    });
    

    PD(".loader-inner").fadeOut("300",function(){
        PD(".container").fadeIn().html(yuanSaoHtml());
    });
    
    PD(".btn").click(function () {
        PD(".pointer").addClass("pointerAnim");  //添加雷达旋转动画
        var timeout = 1000;  //每隔1000ms
        var index = 0;
        var addClass;
        addClass = setInterval(function(){
            if(index >= PD(".user span").length){
                index = 0;
                addClass = clearInterval(addClass);  //结束循环
                PD(".user span").removeClass("flip").addClass("shadow")
            }else {
                PD(".user span").eq(index++).fadeIn(timeout).addClass("flip")
            }
        },timeout);
    })
    
    
});