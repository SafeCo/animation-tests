const pause = document.querySelector('.pause')
const remove = document.querySelector('.remove')
const come = document.querySelector('.come')

gsap.to(".one", {
    duration: 3, 
    repeat: -1,
    ease: "linear",
    motionPath:{
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5]
    }
  });



// const tl = gsap.timeline({repeat:-1, repeatDelay: 1,yoyo:true});
// tl.to('.one', {duration: 1, x:200});

// tl.to('.two', {duration: 1, x:-200, ease: "bounce"});