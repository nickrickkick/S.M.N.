function gameLogic(){
    for(var i = 0; i < enemys.length; i++){
        for(var a = 0; a < hammer_hit.length; a++){
            if(Math.abs(hammer_hit[a].x - enemys[i].x) <= 24 && hammer_hit[a].y - enemys[i].y <= 18 &&  hammer_hit[a].y - enemys[i].y >= -10){
                  enemys.splice(i,1);
                  
            }
        }
        for(var c = 0; c < sword_hit.length; c++){
              if(Math.abs(sword_hit[c].x - enemys[i].x) <= 24 && sword_hit[c].y - enemys[i].y <= 18 &&  sword_hit[c].y - enemys[i].y >= -1){
                  enemys.splice(i,1);
                 
            }
            
        }
       
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