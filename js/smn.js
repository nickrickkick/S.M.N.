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
var hammer = [{image:new Image, x: main_x, y:main_y}];
var hammerHit;
var active = false;
var solo;
var resume;
var speed = 0;
var horizontal = 0;
var speed2 = 0;
var horizontal2 = 0;
var enemys = [];
var sword_hit;
var hammer_hit;

var main_x = document.getElementById("hammerplay"), main_y = document.getElementById("hammerplay"), move_x = 0 , move_y = 0;
var main_x2 =  document.getElementById("swordplay"), main_y2 =  document.getElementById("swordplay"), move_x2 = 0, move_y2 = 0;

var hammerplay = document.getElementById("hammerplay");
var swordplay = document.getElementById("swordplay");
var framerate = 25;
var map_music = document.getElementById("map_music");
var t; 
   
function keyPressHammer(e){
  
 
  //    t = new Date().getTime();
    
           if(e.keyCode == 68){
      
   //   console.log(hammerplay);
     
      if (hammerplay == null){
          hammerplay = document.getElementById("hammerplay");
      }
     
        if (main_x == null){
          main_x = document.getElementById("hammerplay");
         
      }
     
      document.getElementById("hammerplay").style.transform = "rotate(-90deg)";
     
         speed = 1.5;
        move_x = speed;
      
     
           }
    
    if(e.keyCode == 65){
     document.getElementById("hammerplay").style.transform = "rotate(90deg)";
        speed = -1.5;
    move_x = speed;
   
    }
    
    if(e.keyCode == 83){
          if (main_y == null){
          main_y = document.getElementById("hammerplay");
    
      }
       document.getElementById("hammerplay").style.transform = "rotate(360deg)";
        horizontal = 1.5;
    move_y = horizontal;
   
    
    }
    if(e.keyCode == 87){
         document.getElementById("hammerplay").style.transform = "rotate(180deg)";
        horizontal = -1.5;
    move_y = horizontal;
   
    }
     if(e.keyCode == 32) {//attack
         hammerplay.style.backgroundImage = "images/hammerAttack.gif"
          var sound = document.getElementById("hammer");
    sound.play();
     createHammerHit();
         
     }
     
    moveHammer();
    
   //  console.log("keypresshammer time: " + (new Date().getTime() - t));
}

function keyReleaseHammer(e){
    // t = new Date().getTime();
    
    if(e.keyCode == 68){
        move_x = 0;
   //     document.getElementById("hammerplay").style.transform = "rotate(-90deg)";
    }
      if(e.keyCode == 65){
        move_x = 0;
     //    document.getElementById("hammerplay").style.transform = "rotate(90deg)";
    }
      if(e.keyCode == 83){
        move_y = 0;
    
      //   document.getElementById("hammerplay").style.transform = "rotate(360deg)";
    }
      if(e.keyCode == 87){
        move_y = 0;
         
       //  document.getElementById("hammerplay").style.transform = "rotate(180deg)";
    }
   
  // console.log("keypresshammer time: " + (new Date().getTime() - t));
}
function keyPressSword(e){
 //   t = new Date().getTime();
   
       if(e.keyCode == 39){
           
              if (swordplay == null){
          swordplay = document.getElementById("swordplay");
      }
        if (main_x2 == null){
          main_x2 = document.getElementById("swordplay");
      }
           
           speed2 = 1.5;
        move_x2 = speed2;
        
        document.getElementById("swordplay").style.transform = "rotate(-90deg)";
    }
    if(e.keyCode == 37){
        speed2 = -1.5;
    move_x2 = speed2;
        
         document.getElementById("swordplay").style.transform = "rotate(90deg)";
    }
    if(e.keyCode == 40){
          if (main_y2 == null){
          main_y2 = document.getElementById("swordplay");
      }
        horizontal2 = 1.5;
    move_y2 = horizontal2;
        
         document.getElementById("swordplay").style.transform = "rotate(360deg)";
    }
    if(e.keyCode == 38){
        horizontal2 = -1.5;
    move_y2 = horizontal2;
        document.getElementById("swordplay").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 96){
         var sound = document.getElementById("");
    sound.play();
    }
   moveSword();
 //  console.log("keypresshammer time: " + (new Date().getTime() - t));
   
}
function keyReleaseSword(e){
    // t = new Date().getTime();
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
   // console.log("keypresshammer time: " + (new Date().getTime() - t));
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

        
    function createHammerHit(){
   hammerHit = new Image;
   hammerHit.src = "images/hammer_hit.gif";
   
   hammer.push({image:hammerHit, x:main_x, y:main_y});
   return hammerHit;
    
    
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
      
      for(var i = 0; i < hammer.length; i++){
        var bluemiss =  hammer[i];
        
          context.drawImage(bluemiss.image, game.width/2 + bluemiss.x, game.height/2 + bluemiss.y );
     }
            hammer.splice(0, hammer.length - 15);
            
      
      
      
     context.drawImage(hammerplay, game.width/2 + main_x, game.height/2 + main_y );
       context.drawImage(swordplay, game.width/2 + main_x, game.height/2 + main_y );
       
          context.restore();
  
 }
 
  function spawnEnemy(){
    var enemyi = document.createElement("div");
    enemyi.classList.add("enemy");
    enemyi.style.zIndex = "7";
    enemyi.style.top = "" + Math.floor(Math.random() * game.height/2) + "px";
    enemyi.style.left =  "" + Math.floor(Math.random() * game.width/2) + "px";
  //  document.getElementById("game").a
    

  // enemyi.push({ x: 50, y:c});
  
   document.getElementById("game").appendChild(enemyi);
    
}


function gameloop(){
    
// document.getElementById("game").r   
 
    moveHammer();
     
    moveSword();
   
    solo.onclick = function(){
        document.getElementById("solo").style.zIndex = "1"
         document.getElementById("co-op").style.zIndex = "1"
        document.getElementById("start").style.zIndex = "1";
         document.getElementById("canvas_wrap").style.zIndex = "2";
         document.getElementById("play").style.zIndex = "7";
          document.getElementById("background_music").pause();
     var sound2 = document.getElementById("epic_music");
         sound2.play();
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
     game = document.getElementById("space");
     if (game && game.getContext) {
    context = game.getContext('2d');
      setInterval(spawnEnemy, 30000);
    setInterval(this.gameLoop,1000/25);
    window.canvas = document.getElementById("space");
    window.ctx_1 = game.getContext("2d");
     window.addEventListener("keydown", keyPressSword, false);
     window.addEventListener("keyup", keyReleaseSword, false);
     window.addEventListener("keydown", keyPressHammer, false);
     window.addEventListener("keyup", keyReleaseHammer, false); 
      solo.addEventListener("click", gameloop, false);
     }
     
     
}

  

window.addEventListener("load", this.init, false);
