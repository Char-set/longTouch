$("#touchArea").on({  
        touchstart: function(e){  
            timeOutEvent = setTimeout(function(){
                timeOutEvent = 0;
                alert("长按事件触发发"); 
            },500);  
            e.preventDefault();  
        },  
        touchmove: function(){  
            clearTimeout(timeOutEvent);   
            timeOutEvent = 0;   
        },  
        touchend: function(){  
            clearTimeout(timeOutEvent);  
            if(timeOutEvent!=0){   
                alert("你这是点击，不是长按");   
            }   
            return false;   
        }  
    }) 
}
