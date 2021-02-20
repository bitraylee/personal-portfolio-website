
let width=window.innerWidth;
if(width<500){
   gsap.to(".artworks .image-container",{
      scrollTrigger:{
         trigger:".artworks",
         start: "top 90vh",
         end: 'bottom 400px',
         toggleActions: 'play reverse restart reset',
         // markers:true
      },
      css:{
         width:"100%",
         transform:"translate(0,0)",
         filter: "grayscale(0%)",
      },
      ease:Power3.easeOut,
      duration:0.2,
      delay:0
   });
   gsap.to(".designs .image-container",{
      scrollTrigger:{
         trigger:".designs",
         start: "top 90vh",
         end: 'bottom 400px',
         toggleActions: 'play reverse restart reset'
      },
      css:{
         width:"100%",
         transform:"translate(0,0)",
         filter: "grayscale(0%)",

      },
      ease:Power3.easeOut,
      duration:0.2,
      delay:0
   });
   gsap.to(".about .image-container",{
      scrollTrigger:{
         trigger:".about",
         start: "top 90vh",
         end: 'bottom 400px',
         toggleActions: 'play reverse restart reset'
      },
      css:{
         width:"100%",
         transform:"translate(0,0)",
         filter: "grayscale(0%)"

      },
      ease:Power3.easeOut,
      duration:0.2,
      delay:0
   });
}