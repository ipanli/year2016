 
 // 获取抽奖用户手机号
 
 function getUserPhone(){
     
   var phone = localStorage.getItem('userPhone');
   
   if(phone){
       return phone
   }
   
   return false;
 }
 
  // 手机输入后
 
 function savePhone(phone){
    var loc = localStorage.setItem('userPhone', phone);	
     
    PL.closeAll();
     
    return loc;
 }
 
 
 //切换账户
function UserLout(){
    
    PL.open({
       type:2,
       content:""  
    });
    
   localStorage.removeItem('userPhone');
   
   localStorage.removeItem('maili');

   window.location.href = window.location.href;
}


//生成头像 手机尾号 num
function readerUser(num){
    
    var style = 'left:'+randomPosition().left+';top:'+randomPosition().top+';';

    var str = '<span class="userSpan shadow" style="'+ style +'">'+
                    '<img src="./build/images/'+ num +'.jpg" width="100%">'+
               '</span>';
     
     PD(".userWrap").append(str);
     
     return str;
}