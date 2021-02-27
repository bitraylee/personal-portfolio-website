// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
let titleArray=["Itachi's last walk", "Woman in the snow", "Lumin\nesence", "Wild Soul", "Ode to winter"];
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
      start: `${(window.innerHeight * i) - 1} top`,
      end: `${window.innerHeight*(i+1)} ${window.innerHeight}`,
      pin:true,
      onEnter: () => {
         titleTrackNo=i+1;
         title.innerHTML=titleArray[titleTrackNo];
         console.log(titleTrackNo);
      },
       onLeave: () => {
         titleTrackNo=i+1;

         title.innerHTML=titleArray[titleTrackNo];
         console.log(titleTrackNo);


      },
      onEnterBack: () => {             
         titleTrackNo=i+1;

         title.innerHTML=titleArray[titleTrackNo];
         console.log(titleTrackNo);


      },
      onLeaveBack: () => {
         titleTrackNo=i+1;
         title.innerHTML=titleArray[titleTrackNo];
         console.log(titleTrackNo);
         

      }
   })
   
});
