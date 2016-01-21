
function yuanSaoHtml(){
    
      var str = '<div id="loadYuan">'+
                    '<div class="border1">'+
                    '   <div class="pointer pointerAnim"></div>'+
                    '  <div class="userWrap">'+
                    '     <span class="userSpan shadow">'+
                        '        <img src="images/1.jpg" width="100%">'+
                        '   </span>'+
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
     
     return str;
}