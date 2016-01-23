//渲染原
function yuanSaoHtml(){
    
      var str = '<div id="loadYuan">'+
                    '<div class="border1">'+
                    '   <div class="pointer pointerAnim"></div>'+
                    '  <div class="userWrap">'+
                        '</div>'+
                        '<div class="border2">'+
                        '   <div class="border3">'+
                        '      <div class="radar">'+
                        '         <span class="avatar">'+
                            '         <div class="paopao" id="paopaoU">'+
                                      '          <div class="chewing">'+
                                       '         <div class="eye left"><span></span></div>'+
                                        '        <div class="eye right"><span></span></div>'+
                                         '       <div class="mounth"></div>'+
                                          '      <div class="arm left"></div>'+
                                           '     <div class="arm right"></div>'+
                                            '    </div>'+
                                             '   <div class="shadow"></div>'+
                                      '  </div>'+
                            '       </span>'+
                            '  </div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<!--<button class="btn">使劲摇</button>-->'+
                '</div>';
        
        
        return str;
        
}


//渲染底部信息

function ReaderFooter(){
    
   var mailiV =  mailiCount(),
       onlineU = 0;
    
    
    var str = '<div class="foo-count-down">'+
                  '  <span class="">参与人数: <i class="online-user">'+ onlineU +'</i></span>'+
                  '  <span class="fr">当前卖力值：<i class="my-maili">'+ mailiV +'</i></span>'+
                '</div>';
    
    PD("#app").append(str);
    
    
    if(PD('.foo-count-down')[0]){
         var hammertime = new Hammer(PD('#app')[0],{
            domEvents: true
            });
            
            hammertime.on('swiperight', function(ev) {
                console.log(ev);
                PD("#nav").addClass("nav-show");
            });
            
            hammertime.on('swipeleft', function(ev) {
                console.log(ev);
                PD("#nav").removeClass("nav-show");
            });
    }
    
    
}


//渲染侧边栏

function ReaderNavTab(){
    
    var phone = '';
    
    if(getUserPhone()){
       phone = getUserPhone();
    }
    
    var str = '<nav class="nav" id="nav">'+
        '<h6 class="my-title">我的信息</h6>'+
         '<div class="myInfo">'+
          '   <p class="p1">手机号码 : <input class="myPhone" readonly value="'+ phone +'"></input></p>'+
           '  <p class="p1">中奖信息 : <span class="winningInfo">...</span></p>'+
        ' </div>'+
         '<div class="myLout">'+
          '   <a href="javascript:void(0);">切换账户</a>'+
        ' </div>'+
    '</nav>'; 
    
    PD("body").append(str);
    
    PD("body").on("touchend",".myLout",function(){
        UserLout();
    })
    
}




//渲染 弹出输入手机号

function layerTelWind(){
    
    var tel = '<div class="telWrap"><p class="p1">输入手机号,摇出大奖</p><input type="tel" class="telInput" placeholder="手机号">'+
                '<a href="javascript:void(0);" class="submitBtn">确认</a></div>';
    
     var pagei = PL.open({
        type: 1, //1代表页面层
        content: tel,
        shadeClose:false,
        style: 'width:300px; height:160px; border:none;',
        success: function(oPan){
            var cla = 'getElementsByClassName';
            oPan[cla]('submitBtn')[0].onclick = function(){
               var phone = PD('.telInput').val();
                
                if(!checkPhone(phone)){
                    PL.open({
                        time: 2,
                        content:'手机号不正确'
                    })
                    return false;
                }
                
                console.log("通过");
                
                PD(".myPhone").val(phone);
                savePhone(phone);
                AppInit();
            }
            
            PD(".telInput").focus();
            
            PD(".telWrap").addClass("animated shake");
            
            setTimeout(function(){
                PD(".telWrap").removeClass("animated shake");
            },1000)
        }
    });
 
 
}


//渲染弹幕输入界面

function ReaderBarrage(){
    
    var str  = '<div class="post-barrage">'+
                '<div class="input">'+
                 '<input id="reply-write" name="content" type="text" value="" placeholder="输入弹幕文字">'+
                 '</div>'+
                 '<div class="send-btn-wrap">'+
                 ' <a class="send-btn">发射</a>'+
                 '</div>'+
               ' </div>';
    
    
    PD("body").append(str);
    
    PD("body").on("touchend",".send-btn",function(){
        sedInputMsg();
    })
    
    
}
