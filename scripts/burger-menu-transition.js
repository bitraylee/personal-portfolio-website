var currentState="menu";
function changeState(){
   let line1= document.getElementById("line-1");
   let line2= document.getElementById("line-2");
   let line2Container=document.getElementById("line-2-container");
   let line3= document.getElementById("line-3");
   if(currentState=="menu"){
      line1.classList.add("cross-state-1");
      line2Container.classList.add("cross-state-2");
      line2.classList.add("cross-state-2");
      line3.classList.add("cross-state-3");

      currentState="cross"
   }
   else{
      line1.classList.remove("cross-state-1");
      line2Container.classList.remove("cross-state-2");
      line2.classList.remove("cross-state-2");
      line3.classList.remove("cross-state-3");

      currentState="menu";
   }
}
