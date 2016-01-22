//随机获取颜色值
function getReandomColor() {
    return '#' + (function (h) {
        return new Array(7 - h.length).join("0") + h
    })((Math.random() * 0x1000000 << 0).toString(16))
}


//手机号验证

function checkPhone(tel){ 
    if(!(/^1[3|4|5|7|8]\d{9}$/.test(tel))){ 
        return false; 
    } 
    
    return tel;
}

//随机数 

function GetRandomNum(Min,Max){   
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));   
} 

//get class
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