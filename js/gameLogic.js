function gameLogic(){
 var enemys =  document.getElementsByClassName("enemy");
 var hitter =  document.getElementsByClassName("hit");
 
    for(var i = 0; i < enemys.length; i++){
        for(var a = 0; a < hitter.length; a++){
            if(Math.abs(hitter[a].x - enemys[i].x) <=75 && hitter[a].y - enemys[i].y <= 75 &&  hitter[a].y - enemys[i].y >= -10){
             
                   document.getElementById("game").removeChild(enemys[i]);
                  
            }
        }
     //   for(var c = 0; c < sword_hit.length; c++){
     //         if(Math.abs(sword_hit[c].x - enemys[i].x) <= 32 && sword_hit[c].y - enemys[i].y <= 32 &&  sword_hit[c].y - enemys[i].y >= -1){
                
                  document.getElementById("game").removeChild(enemys[i]);
      //      }
            
     //   }
       
 //    if(Math.abs(main_x - enemys[i].x) <= 24 && main_y - enemys[i].y <= 18 &&  main_y - enemys[i].y >= -1){
   //         enemys.splice(i,1);
//            deadblue = true;
 //   }
 //   if(Math.abs(main_x2 - enemys[i].x) <= 24 && main_y2 - enemys[i].y <= 18 &&  main_y2 - enemys[i].y >= -1){
  //          enemys.splice(i,1);
//            deadbrown = true;
 //   }
}
}