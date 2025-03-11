let cont2 = document.querySelector(".cont2");
let ultags = document.querySelector(".ultags");
cont2.addEventListener("click", function () {
  ultags.classList.toggle("ultoggle");
  cont2.children[0].classList.toggle("arrow-1");
  cont2.children[1].classList.toggle("arrow-2");
  cont2.children[2].classList.toggle("arrow-3");
});
function mediaqueries() {
  let mobile=window.matchMedia("(max-width:660px)")
  let laptop = window.matchMedia("(min-width:660px)");
  let desktop = window.matchMedia("(min-width:745px)");
  if(mobile.matches){
    gsap.from(".cont1 h1",{
      transform: "translatex(-100px)",
      duration: 1,
    })
    gsap.from(".textcont h1",{
      opacity:0,
      duration:2
    })

  }
  else if (laptop.matches) {
    gsap.from(".ultags li", {
      transform: "translatey(-100px)",
      duration: 0.6,
      stagger:0.3
    });
    gsap.from(".cont1 h1",{
      opacity:0,
      duration:4
    })
    gsap.from(".textcont h1",{
      opacity:0,
      duration:2
    })


  } else if(desktop.matches){
    gsap.to(".ultags li", {
      transform: "translatey(-100px)",
      duration: 0.6,
      stagger:0.3
    
    });
    gsap.from(".cont1 h1",{
      opacity:0,
      duration:4
    })
    gsap.from(".textcont h1",{
      opacity:0,
      duration:2
    })

  }
  else{
    gsap.from(".cont1 h1",{
      opacity:0,
      duration:0
    })
  }
}
window.addEventListener("load", mediaqueries);
window.addEventListener("resize", mediaqueries);

// function gsapmediaqueries() {
//   let mobile = window.matchMedia("(max-width:600px)");
//   let tab = window.matchMedia("(max-width:740px)");
//   if (mobile.matches) {
//     gsap.to(".lastsection1 p", {
//       transform: "translatex(80px)",
//       duration: 2,
//       repeat: -1,
//       rotate: 360,
//     });
//   } else if(tab.matches){
//     gsap.to(".lastsection1 p", {
//       transform: "translatey(0px)",
//       duration: 0,
//       repeat: 0,
//       rotate: 0,
//     });
//   }
// }
// window.addEventListener("load", gsapmediaqueries);
// window.addEventListener("resize", gsapmediaqueries);
