// variables that could be usefull
// fight global
var q = 0;
var f = 0;
var c = 0;
var z = 0;

var game; //canvas
var battle; //background
var map; // background
var context;
var player1;
var player2;
var active = false;
var solo;
var resume;
var speed = 0;
var horizontal = 0;
var speed2 = 0;
var horizontal2 = 0;
var PlayerDmg = Math.floor(Math.random() * 6); // damage that player outputs

var main_x = document.getElementById("hammerplay"), main_y = document.getElementById("hammerplay"), move_x = 0 , move_y = 0;
var main_x2 =  document.getElementById("swordplay"), main_y2 =  document.getElementById("swordplay"), move_x2 = 0, move_y2 = 0;

var hammerplay = document.getElementById("hammerplay");
var swordplay = document.getElementById("swordplay");
var framerate = 25;
var map_music = document.getElementById("map_music");


   
function keyPressHammer(e){
   
    
    
           if(e.keyCode == 68){
      
      console.log(hammerplay);
      if (hammerplay == null){
          hammerplay = document.getElementById("hammerplay");
      }
        if (main_x == null){
          main_x = document.getElementById("hammerplay");
      }
         speed = 1.5;
        move_x = speed;
      
      document.getElementById("hammerplay").style.transform = "rotate(90deg)";
           }
    
    if(e.keyCode == 65){
        speed = -1.5;
    move_x = speed;
    document.getElementById("hammerplay").style.transform = "rotate(-90deg)";
    }
    
    if(e.keyCode == 83){
          if (main_y == null){
          main_y = document.getElementById("hammerplay");
      }
        horizontal = 1.5;
    move_y = horizontal;
   
    document.getElementById("hammerplay").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 87){
        horizontal = -1.5;
    move_y = horizontal;
    document.getElementById("hammerplay").style.transform = "rotate(360deg)";
    }
     if(e.keyCode == 32) {//attack
         var sound = document.getElementById("");
    sound.play();
     }
      if(e.keyCode == 66) { // attack?
       
     }
    moveHammer();
    
}

function keyReleaseHammer(e){
    
    if(e.keyCode == 68){
        move_x = 0;
      //  document.getElementById("blueFight").style.transform = "rotate(90deg)";
    }
      if(e.keyCode == 65){
        move_x = 0;
        
    }
      if(e.keyCode == 83){
        move_y = 0;
    
       //  document.getElementById("blueFight").style.transform = "rotate(180deg)";
    }
      if(e.keyCode == 87){
        move_y = 0;
         
        // document.getElementById("blueFight").style.transform = "rotate(360deg)";
    }
     if(e.keyCode == 32) {
       //  document.getElementsByClassName("blueFight").style.backgroundImage = "url('images/BlueBoardSolo.png')"
     }
 
}
function keyPressSword(e){
   
       if(e.keyCode == 39){
           
              if (swordplay == null){
          swordplay = document.getElementById("swordplay");
      }
        if (main_x2 == null){
          main_x2 = document.getElementById("swordplay");
      }
           
           speed2 = 1.5;
        move_x2 = speed2;
        
        document.getElementById("swordplay").style.transform = "rotate(90deg)";
    }
    if(e.keyCode == 37){
        speed2 = -1.5;
    move_x2 = speed2;
        
         document.getElementById("swordplay").style.transform = "rotate(-90deg)";
    }
    if(e.keyCode == 40){
          if (main_y2 == null){
          main_y2 = document.getElementById("swordplay");
      }
        horizontal2 = 1.5;
    move_y2 = horizontal2;
        
         document.getElementById("swordplay").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 38){
        horizontal2 = -1.5;
    move_y2 = horizontal2;
        document.getElementById("swordplay").style.transform = "rotate(360deg)";
    }
    if(e.keyCode == 96){
         var sound = document.getElementById("");
    sound.play();
    }
   moveSword();
   
}
function keyReleaseSword(e){
    if(e.keyCode == 39){
        move_x2 = 0;
      //  document.getElementById("redFight").style.transform = "rotate(90deg)";
    }
      if(e.keyCode == 37){
        move_x2 = 0;
     //   document.getElementById("redFight").style.transform = "rotate(-90deg)";
    }
      if(e.keyCode == 40){
        move_y2 = 0;
      //  document.getElementById("redFight").style.transform = "rotate(180deg)";
    }
      if(e.keyCode == 38){
        move_y2 = 0;
      //  document.getElementById("redFight").style.transform = "rotate(360deg)";
    }
   
}

function moveHammer(){
   c += move_x;
     z += move_y;
      var res = 1175;
  var x = res + c;
   var str = 600;
   var y = str + z;
         
          if(main_x >= 10 && speed > 0){
            main_x += 0;
        }
          else if(main_x <= -9 && speed < 0){
         main_x += 0;
     }else{
      document.getElementById("hammerplay").style.left = (x).toString() + "px";
           
            
           
     
      }
         if(main_y >= 10 && horizontal > 0){
        main_y += 0;
      }
      else  if (main_y <= -9 && horizontal < 0){
        main_y += 0;
        }else{
        
             document.getElementById("hammerplay").style.top = (y).toString() + "px";
             
         }
    
   
}
function moveSword(){
      q += move_x2;
      f += move_y2;
       var zez = 500;
  var x2 = zez + q;
  
  
   var sst = 100;
   var y2 = sst + f;
     
       if(main_x2 >= 10 && speed2 > 0){
            main_x2 += 0;
        }
          else if(main_x2 <= -9 && speed2 < 0){
         main_x2 += 0;
     }else{
         document.getElementById("swordplay").style.left = (x2).toString() + "px";
     }
     if(main_y2 >= 10 && horizontal2 > 0){
        main_y2 += 0;
      }
      else  if (main_y2 <= -9 && horizontal2 < 0){
        main_y2 += 0;
        }else{
            document.getElementById("swordplay").style.top = (y2).toString() + "px";
        }
   
}
 


function draw(){
       context.save();
      context.clearRect(0,0,game.width,game.height);
      
     context.drawImage(hammerplay, game.width/2 + main_x, game.height/2 + main_y );
       context.drawImage(swordplay, game.width/2 + main_x, game.height/2 + main_y );
       
          context.restore();
  
 }

function gameloop(){
    
    solo.onclick = function(){
        document.getElementById("start").style.zIndex = "1";
    }
    
    resume.onclick = function(){
    active = !active;
};

 if(active == false){
     document.getElementById("space").style.zIndex = "6";
         document.getElementById("resume").style.zIndex = "6";
          document.getElementById("exit").style.zIndex = "6";
    }else {
        document.getElementById("resume").style.zIndex = "-2";
        document.getElementById("exit").style.zIndex = "-2";
    } 

function pause(e){
    if(e.keyCode == 222){
        active = !active;
        
    }
   
   
}
  //  draw();
  if(active === false){
       
       
  }
  else if(active ===true){
      moveHammer();
    moveSword();
  }
  
  
}



function init() {
     solo = document.getElementById("solo");
     resume = document.getElementById("resume");
     game = document.getElementById("land");
     if (game && game.getContext) {
    context = game.getContext('2d');
    setInterval(this.gameLoop,1000/100);
    window.canvas = document.getElementById("space");
    window.ctx_1 = game.getContext("2d");
     window.addEventListener("keydown", keyPressSword, false);
     window.addEventListener("keyup", keyReleaseSword, false);
     window.addEventListener("keydown", keyPressHammer, false);
     window.addEventListener("keyup", keyReleaseHammer, false); 
     }
     
     
}

  


window.addEventListener("load", this.init, false);
