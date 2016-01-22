
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
                            '            <img src="images/10.jpg" width="100%">'+
                            '       </span>'+
                            '  </div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<!--<button class="btn">使劲摇</button>-->'+
                '</div>';
        
        
        return str;
        
}

//随机数 

function GetRandomNum(Min,Max){   
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));   
} 


// 生成随机位置

function randomPosition(){
    
   
    var topN = GetRandomNum(1,100),
        leftN = GetRandomNum(1,100);    
    return {
        top: topN+'%',
        left: leftN+'%'
    }
}

//生成头像 手机尾号 num
function readerUser(num){
    
    var style = 'left:'+randomPosition().left+';top:'+randomPosition().top+';';

    var str = '<span class="userSpan shadow" style="'+ style +'">'+
                    '<img src="images/'+ num +'.jpg" width="100%">'+
               '</span>';
     
     PD(".userWrap").append(str);
     
     return str;
}

//弹出输入手机号


function layerTelWind(){
    
    var tel = '<div class="telWrap"><p class="p1">输入手机号,摇出大奖</p><input type="tel" class="telInput" placeholder="手机号">'+
                '<a href="#" class="submitBtn">确认</a></div>';
    
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
                
                console.log("通过")
                savePhone(phone);
                
            }
            
            PD(".telInput").focus();
            
            PD(".telWrap").addClass("animated shake");
            
            setTimeout(function(){
                PD(".telWrap").removeClass("animated shake");
            },1000)
        }
    });
 
 
}

//手机号验证

function checkPhone(tel){ 
    if(!(/^1[3|4|5|7|8]\d{9}$/.test(tel))){ 
        return false; 
    } 
    
    return tel;
}



function PanshakYo(){
        var speed = 250;
		var audio = document.getElementById("shakemusic");
        var noPhone = document.getElementById("nophone");
		var openAudio = document.getElementById("openmusic");
		var x = t = z = lastX = lastY = lastZ = 0;
		window.addEventListener('devicemotion',
			function () {
                     

                    var acceleration = event.accelerationIncludingGravity;
                    x = acceleration.x;
                    y = acceleration.y;
                    if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
                        
                         if(!getUserPhone()){
                               
                                PD(".telWrap").addClass("animated shake");  
                                    
                                setTimeout(function(){   
                                    PD(".telWrap").removeClass("animated shake");
                                }, 1500);
                             
                             return;
                         }
                         
                        
                        audio.play();             
                        setTimeout(function(){   
                            audio.pause();
                            openAudio.play();
                            
                        }, 1500);
                    };
                    lastX = x;
                    lastY = y;
                    

                
				
			},false);
  }
  
 // 手机输入后
 
 function savePhone(phone){
     
     
    var loc = localStorage.setItem('userPhone', phone);	
     
    PL.closeAll();
     
    return loc;
 }
 
 // 获取抽奖用户手机号
 
 function getUserPhone(){
     
   var phone = localStorage.getItem('userPhone');
   
   if(phone){
       return phone
   }
   
   return false;
 }
 
 // 定时器模拟追加在线人数
 function UserOnloneAdd(){
     
     var num = GetRandomNum(0,9);
     readerUser(num);     
     
 }
 
 //统计在线人数
 
 function  UserOnlone(){
     
     var length = PD(".userWrap span").length;
     
     console.log(length);
 }