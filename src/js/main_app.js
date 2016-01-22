PD(function(){
    // touchstart
    PD('body,html').on('touchmove', function (event) {
        event.preventDefault();
    });
    
    
    if (window.DeviceMotionEvent){
		PanshakYo();
	}else {
        alert('你的手机太差了，不支持摇一摇 ');
    
    } 
    PD(".loader-inner").fadeOut("300",function(){
        PD(".container").fadeIn().html(yuanSaoHtml());
    });
    
    
    PD("#audio_btn").click(function () {
			var music = document.getElementById("music"),
            _t = PD(this);
			if (music.paused) {
				music.play();
                _t.removeClass('pause').addClass('paly')
				
			} else {
				music.pause();
                  _t.removeClass('paly').addClass('pause')
			
			}
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
    });
    
    
    if(!getUserPhone()){
        layerTelWind();
    }else{
        AppInit();
    }
    
    
    
   
    
//    var addSet = setInterval(function(){
//         UserOnloneAdd()
//     },500)
    
    
    
});