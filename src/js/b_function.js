
//渲染倒计时
function RederCountDown(){
    return 0;
}

// 初始化
function AppInit(){
    
   
    ReaderFooter();
     
    ReaderNavTab();
    
    
    ReaderBarrage();
    //barrageText(); 
    
}

 
 
 // 定时器模拟追加在线人数
 function UserOnloneAdd(){
     
     var num = GetRandomNum(0,9);
     readerUser(num);     
     
 }
 
 
 // 卖力值累计 回调
 
 function mailiVal(num,call){
     
     var old =  localStorage.getItem('maili'),
         Val = num;
    
     
     if(old){ 
       Val = old+','+num;
     }
     
     localStorage.setItem('maili',Val);  
     
     call(Val);
 }

 
 
 //统计在线人数
 
 function  UserOnloneCount(){
     
     var length = PD(".userWrap span").length;
     
     console.log(length);
 }
 
 

// 测试弹幕消息
function barrageText(){
    
    var msg = '哈哈你好';
 
    for(var i = 0;i< 50; i++){
        
      barragePush(msg+i);
        
    }
    
}
