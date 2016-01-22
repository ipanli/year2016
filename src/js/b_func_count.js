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
       
       for(var i=0;i<val.length;i++){
           
           count +=  Number(val[i]);
           
       }
       
        return count;
     
 }