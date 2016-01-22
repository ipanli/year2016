//弹幕初始化
function barrageInit() { 
    var _top = 0;
    PD("#barrage").find("div").show().each(function () {
        
        var _t = PD(this);
        
        var _left = PD(window).width() - _t.width()+300;
        var _height = PD(window).height();
        
        _top = _top + 36;
        if (_top >= _height - 120) {  
            _top = 40;
        }
        _t.css({left: _left, top: _top});
        var time = 10000;
        if (_t.index() % 2 == 0) {
            time = 12000;
        }
        if (_t.index() % 3 == 0) {
            time = 14000;
        }
        if (_t.index() % 4 == 0) {
            time = 16000;
        }
        if (_t.index() % 5 == 0) {
            time = 18000;
        }
        if (_t.index() % 7 == 0) {
            time = 20000;
        }
        if (_t.index() % 8 == 0) {
            time = 23000;
        }
        _t.animate({left: "-" + _left + "px"}, time, function () {
            
            _t.remove();
            
        });
    });
}


 
//弹幕文字推送

function barragePush(msg){
  
  var color = getReandomColor(),
      size = GetRandomNum(10,18);
  
  var str = '<div style="color:'+ color +';font-size:'+ size +'px;">'+ msg +'</div>';
  
  PD("#barrage").append(str);  
  
  
  barrageInit();
    
}