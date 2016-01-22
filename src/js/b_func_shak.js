//摇一摇事件
function PanshakYo(){
        var speed = 25;
		var audio = document.getElementById("shakemusic");
        var noPhone = document.getElementById("nophone");
		var openAudio = document.getElementById("openmusic");
		var x = t = z = lastX = lastY = lastZ = 0;
        
        var openSw = true;
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
                        
                        if(!openSw){
                            
                            
                            return false;
                        }
                        
                        var maili = Math.abs(lastX.toFixed(0))+Math.abs(lastY.toFixed(0 ));
                            openSw = false;
                            
                            audio.play();  
                             
                             
                                    
                            setTimeout(function(){   
                                 audio.pause();
                                openAudio.play();
                                
                                PL.open({
                                    content: '卖力值增加:'+maili,
                                    time: 2
                                });
                                
                                mailiVal(maili,function(data){      
                                    PD(".my-maili").text(mailiCount());  
                                    
                                    
                                    setTimeout(function(){
                                        openSw = true;
                                    },2000);
                                    
                                    
                                                              
                                });
        
                            }, 1500);
                            
                            
                            
                    };
                    lastX = x;
                    lastY = y;
                    

                
				
			},false);
  }