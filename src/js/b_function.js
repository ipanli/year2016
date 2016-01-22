
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


function getElementsClass(classnames){ 
    var classobj= new Array();//定义数组 
    
    var classint=0;//定义数组的下标 
    
    var tags=document.getElementsByTagName("*");//获取HTML的所有标签 
    
    for(var i in tags){//对标签进行遍历 
    
        if(tags[i].nodeType==1){//判断节点类型 
        
            if(tags[i].getAttribute("class") == classnames){ 
        
                classobj[classint]=tags[i]; 
                
                classint++; 
        
            } 
        
        } 
    
    } 
    
    return classobj;//返回组成的数组 
 
} 


//渲染倒计时
function RederCountDown(){
    return 0;
}

//渲染底部信息

function ReaderFooter(){
    
    var str = '<div class="foo-count-down">'+
                  '  <!--<span class="online-user">参与人数: <i>100</i></span>'+
                  '  <span class="my-maili fr">当前卖力：<i>100</i></span>-->'+
                '</div>';
    
    PD("#app").append(str);
    
}

//渲染侧边栏

function ReaderNavTab(){
    
    
    
    var str = '<nav class="nav">'+
        '<h6 class="my-title">我的信息</h6>'+
         '<div class="myInfo">'+
          '   <p class="p1">手机号码 : <input class="myPhone" readonly value="150000003499"></input></p>'+
           '  <p class="p1">中奖信息 : <span class="winningInfo">...</span></p>'+
        ' </div>'+
         '<div class="myLout">'+
          '   <a href="javascript:void(0);">切换账户</a>'+
        ' </div>'+
    '</nav>'; 
    
    
    
    PD("#app").append(str);
}

//随机数 

function GetRandomNum(Min,Max){   
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));   
} 


// 生成随机位置

function randomPosition(){
    
    var windW = PD(window).width(),
        loadH = PD(".userWrap").height(),
        offsetL = PD(".userWrap").offset().left;
     
    var topN = GetRandomNum(-10,loadH),
        leftN = GetRandomNum(0-offsetL,windW-offsetL-30);    
    return {
        top: topN+'px',
        left: leftN+'px'
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
        var speed = 25;
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
                         
                        var maili = Math.abs(lastX.toFixed(0))+Math.abs(lastY.toFixed(0 ));
                        
                        PD(".foo-count-down").append(maili+',')
                        
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
 
 
 // 卖力值累计
 
 function mailiVal(num){
     
     var old =  localStorage.getItem('maili'),
         Val = num;
    
     
     if(old){ 
       Val = old+num;
     }
     
     localStorage.setItem('maili',Val);  
     
     return Val;
 }
 // 获取卖力值统计
 function mailiCount(){
     
      var old =  localStorage.getItem('maili');

         if(!old){
            return 0;             
         }
         
       var val = old.split(",");
       
       if(!val){
         return 0;
       }
       
       var count = 0;
       
       for(var i=0;i<val.length-1;i++){
           
           count +=  Number(val[i]);
           
       }
       
        return count;
     
 }
 
 
 //统计在线人数
 
 function  UserOnloneCount(){
     
     var length = PD(".userWrap span").length;
     
     console.log(length);
 }
 
 
 //用户接口
 function UsersApi(){
     
     PD.ajax({
        type:"GET",    
        url: "http://172.20.6.163:8080/users",
        dataType:"json",
        success:function (result) {
            console.log(JSON.stringify(result));
        },
        error:function (result, status) {
        //处理错误
            console.log(result);
        }
    });
     
     
 }
 
 


 
 
