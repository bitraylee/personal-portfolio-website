// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let titleArray=["Itachi's last walk", "Woman in the snow", "Luminesence", "Wild Soul", "Ode to winter"];
let titleTrackNo=0;

const artworksScroller= document.getElementById("scroller");
let container= document.querySelector(".index-main-mobile .container");
let imgContainers=document.querySelectorAll(".index-main-mobile .container .image-container"); 
console.log(imgContainers);
let title=document.getElementById('title-track');



imgContainers.forEach((imgContainer, i)=>{
   const current= imgContainer;
   ScrollTrigger.create({
      trigger:container,
      markers:true,
      start: `${(window.innerHeight * i)} ${window.innerHeight*0.5}`,
      end: `${window.innerHeight*(i+1)} ${window.innerHeight*0.5}`,
      // pin:true,
      onEnter: () => {
         
         titleTrackNo=i+1;
         title.innerHTML=titleArray[titleTrackNo];
         console.log(titleTrackNo);

         gsap.fromTo(title,{
            opacity:0.2,
            y:"20px",
         },{
            opacity:1,
            duration:0.5,
            y:"0px",
         });
      },
       onLeave: () => {
         if(i==3){
            title.innerHTML="";
            // playExitAnimation();
         }
         else{
            titleTrackNo=i+1;
            title.innerHTML=titleArray[titleTrackNo];
            console.log(titleTrackNo);
         }
         
         
      },
      onEnterBack: () => { 
         if(i==1){
            titleTrackNo=0;
         }
         else{
            titleTrackNo=i+1;
         }
         title.innerHTML=titleArray[titleTrackNo];
         console.log(titleTrackNo);
         gsap.fromTo(title,{
            opacity:0.2,
            y:"20px",
         },{
            opacity:1,
            duration:0.5,
            y:"0px",
         });

      },
      onLeaveBack: () => {
         if(i==0){
            titleTrackNo=0;
         }
         else{
            titleTrackNo=i+1;
         }
         title.innerHTML=titleArray[titleTrackNo];
         console.log(titleTrackNo);
         
         
      }
   })
});



