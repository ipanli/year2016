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