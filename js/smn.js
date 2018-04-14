// variables that could be usefull
// fight global
var q = 0;
var f = 0;
var c = 0;
var z = 0;
var point_hammer = 0;
var point_sword = 0;
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
var boss_hpc;
var over = false;
var speed = 0;
var horizontal = 0;
var speed2 = 0;
var horizontal2 = 0;
var enemys = [];
var swordHit;
var hammer_hit;
var main_x = document.getElementById("hammerplay"), main_y = document.getElementById("hammerplay"), move_x = 0 , move_y = 0;
var main_x2 =  document.getElementById("swordplay"), main_y2 =  document.getElementById("swordplay"), move_x2 = 0, move_y2 = 0;
var boss_hp = 1000;
var hammerplay = document.getElementById("hammerplay");
var swordplay = document.getElementById("swordplay");
var framerate = 25;
var map_music = document.getElementById("map_music");
var t; 

var hitter =  document.getElementsByClassName("hit");
var swinger =  document.getElementsByClassName("swing");
var enemys =  document.getElementsByClassName("enemy");
var enemyz =  document.getElementsByClassName("enemy2");
var bosses =  document.getElementsByClassName("boss");
   
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
     
         speed = 10;
        move_x = speed;
      
     
           }
    
    if(e.keyCode == 65){
     document.getElementById("hammerplay").style.transform = "rotate(90deg)";
        speed = -10;
    move_x = speed;
   
    }
    
    if(e.keyCode == 83){
          if (main_y == null){
          main_y = document.getElementById("hammerplay");
    
      }
       document.getElementById("hammerplay").style.transform = "rotate(360deg)";
        horizontal = 10;
    move_y = horizontal;
   
    
    }
    if(e.keyCode == 87){
         document.getElementById("hammerplay").style.transform = "rotate(180deg)";
        horizontal = -10;
    move_y = horizontal;
   
    }
     if(e.keyCode == 32) {//attack
     document.getElementById("hammerplay").style.backgroundImage = "url('images/hammerAttack.gif')";
     window.setTimeout(hamam, 1000);
     
        
          
          var sound = document.getElementById("hammer");
    sound.play();
     createHammerHit();
     window.setTimeout(cutHit, 1000)
     killReach();
     killReachBoss();
     killReach2();
         
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
           
           speed2 = 10;
        move_x2 = speed2;
        
        document.getElementById("swordplay").style.transform = "rotate(-90deg)";
    }
    if(e.keyCode == 37){
        speed2 = -10;
    move_x2 = speed2;
        
         document.getElementById("swordplay").style.transform = "rotate(90deg)";
    }
    if(e.keyCode == 40){
          if (main_y2 == null){
          main_y2 = document.getElementById("swordplay");
      }
        horizontal2 = 10;
    move_y2 = horizontal2;
        
         document.getElementById("swordplay").style.transform = "rotate(360deg)";
    }
    if(e.keyCode == 38){
        horizontal2 = -10;
    move_y2 = horizontal2;
        document.getElementById("swordplay").style.transform = "rotate(180deg)";
    }
    if(e.keyCode == 96){
        document.getElementById("swordplay").style.backgroundImage = "url('images/swordAttack.gif')";
     window.setTimeout(soram, 333);
     createSwordHit();
     window.setTimeout(shoosHit, 1000)
     killReach();
     killReachBoss();
     killReach2();
         var sound = document.getElementById("swordz");
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

function cutHit(){
    for(var i = 0; i < hitter.length; i++){
     document.getElementById("game").removeChild(hitter[i]);
    }
}

function shoosHit(){
    for(var i = 0; i < swinger.length; i++){
     document.getElementById("game").removeChild(swinger[i]);
    }
}

function soram(){
     document.getElementById("swordplay").style.backgroundImage = "url('images/swordStand.gif')";
}

function hamam(){
     document.getElementById("hammerplay").style.backgroundImage = "url('images/hammerStand.gif')";    
}



function moveHammer(){
  c += move_x;
     z += move_y;
      var res = 1000;
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
        c += move_x;
     z += move_y;
      var res = 1000;
  var x = res + c;
   var str = 600;
   var y = str + z;
   
   hammerHit = document.createElement("div");
   hammerHit.classList.add("hit");
   hammerHit.style.zIndex = "7";
   hammerHit.style.top =  (y).toString() + "px";
   hammerHit.style.left =  (x).toString() + "px";
   
   document.getElementById("game").appendChild(hammerHit);
  
}

 function createSwordHit(){
        q += move_x2;
      f += move_y2;
       var zez = 500;
  var x2 = zez + q;
   var sst = 100;
   var y2 = sst + f;
   
   swordHit = document.createElement("div");
   swordHit.classList.add("hit");
   swordHit.style.zIndex = "7";
   swordHit.style.top =  (y2).toString() + "px";
   swordHit.style.left =  (x2).toString() + "px";
   
   document.getElementById("game").appendChild(swordHit);
  
}

function spawnEnemy(){
    var enemyi = document.createElement("div");
    enemyi.classList.add("enemy");
    enemyi.style.zIndex = "7";
    enemyi.style.top = "" + Math.floor(Math.random() * (game.height-20)) + "px";
    enemyi.style.left =  "" + Math.floor(Math.random() * (game.width-20)) + "px";
  //  document.getElementById("game").a
    

  // enemyi.push({ x: 50, y:c});
  
    document.getElementById("game").appendChild(enemyi);
    
}

    function spawnEnemy2(){
        
          var enemye = document.createElement("div");
    enemye.classList.add("enemy2");
    enemye.style.zIndex = "7";
    enemye.style.top = "" + Math.floor(Math.random() * (game.height-20)) + "px";
    enemye.style.left =  "" + Math.floor(Math.random() * (game.width-20)) + "px";
  //  document.getElementById("game").a
    

  // enemyi.push({ x: 50, y:c});
  
    document.getElementById("game").appendChild(enemye);
    
    
        }
  



function spawnBoss(){
    var boss = document.createElement("div");
    boss.classList.add("boss");
    boss.style.zIndex = "8";
    boss.style.top = "" + Math.floor(Math.random() * (game.height-40)) + "px";
    boss.style.left =  "" + Math.floor(Math.random() * (game.width-40)) + "px";
  //  document.getElementById("game").a
    

  // enemyi.push({ x: 50, y:c});
  
    document.getElementById("game").appendChild(boss);
    
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
 
 function killReach(){
 
 
 
    for(var i = 0; i < enemys.length; i++){
        for(var a = 0; a < hitter.length; a++){
            var rect1 = hitter[a].getBoundingClientRect(); var rect2 = enemys[i].getBoundingClientRect(); 
            var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)

            if(overlap){
             
                   document.getElementById("game").removeChild(enemys[i]);
                   point_hammer++;
                  
            }
        }
         for(var b = 0; b < swinger.length; b++){
            var rect3 = swinger[b].getBoundingClientRect(); var rect4 = enemys[i].getBoundingClientRect(); 
            var overlap2 = !(rect3.right < rect4.left || 
                rect3.left > rect4.right || 
                rect3.bottom < rect4.top || 
                rect3.top > rect4.bottom)
                
                if(overlap2){
                    document.getElementById("game").removeChild(enemys[i]);
                    point_sword++;
                }
    
}
}
}

function killReach2(){
 
 
 
    for(var u = 0; u < enemyz.length; u++){
        for(var a = 0; a < hitter.length; a++){
            var rect1 = hitter[a].getBoundingClientRect(); var rect2 = enemyz[u].getBoundingClientRect(); 
            var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)

            if(overlap){
             
                   document.getElementById("game").removeChild(enemyz[u]);
                  point_hammer += 2;
            }
        }
         for(var b = 0; b < swinger.length; b++){
            var rect3 = swinger[b].getBoundingClientRect(); var rect4 = enemyz[u].getBoundingClientRect(); 
            var overlap2 = !(rect3.right < rect4.left || 
                rect3.left > rect4.right || 
                rect3.bottom < rect4.top || 
                rect3.top > rect4.bottom)
                
                if(overlap2){
                    document.getElementById("game").removeChild(enemyz[u]);
                    point_sword += 2;
                }
    
}
}
}
 
  function killReachBoss(){
 
 
 
    for(var k = 0; k < bosses.length; k++){
        for(var a = 0; a < hitter.length; a++){
            var rect1 = hitter[a].getBoundingClientRect(); var rect2 = bosses[k].getBoundingClientRect(); 
            var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)

            if(overlap){
             
                   boss_hp -= 1;
                   point_hammer += 3;
                   if(boss_hp <= 0){
                      document.getElementById("game").removeChild(bosses[k]);  
                      point_hammer += 100;
                   }
                  
            }
        }
         for(var b = 0; b < swinger.length; b++){
            var rect3 = swinger[b].getBoundingClientRect(); var rect4 = bosses[k].getBoundingClientRect(); 
            var overlap2 = !(rect3.right < rect4.left || 
                rect3.left > rect4.right || 
                rect3.bottom < rect4.top || 
                rect3.top > rect4.bottom)
                
                if(overlap2){
                      boss_hp -= 1;
                      point_sword +=3
                        if(boss_hp <= 0){
                      document.getElementById("game").removeChild(bosses[k]);  
                      point_sword += 100;
                   }
                }
                document.getElementById("ham").innerHTML = "hammer" + point_hammer;
                document.getElementById("sor").innerHTML = "sword" + point_sword;
    
}
}
}
// function killReach2(){
 
 
 
//    for(var b = 0; b < enemys.length; i++){
//        for(var a = 0; a < swinger.length; a++){
 //           var overlap = !(rect3.right < rect4.left || 
//                rect3.left > rect4.right || 
//                rect3.bottom < rect4.top || 
//                rect3.top > rect4.bottom)

 //           if(overlap){
             
    //               document.getElementById("game").removeChild(enemys[i]);
 //                 
  //          }
  //      }
    
//}

  


function gameloop(){
    
    
    
  if(boss_hp <= 0){
      document.getElementById("winner").style.zIndex = "10"
  }
 
    moveHammer();
     
    moveSword();
    
     
   
    solo.onclick = function(){
        document.getElementById("solo").style.zIndex = "1"
        document.getElementById("start").style.zIndex = "1";
         document.getElementById("canvas_wrap").style.zIndex = "2";
         document.getElementById("play").style.zIndex = "7";
          document.getElementById("background_music").pause();
     var sound2 = document.getElementById("epic_music");
         sound2.play();
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
     game = document.getElementById("space");
     if (game && game.getContext) {
    context = game.getContext('2d');
      setInterval(spawnEnemy, 2500);
      setInterval(spawnEnemy2, 3500);
      setInterval(spawnBoss, 300000);
     setInterval(over, 300000);
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
