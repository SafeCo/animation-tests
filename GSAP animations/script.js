const orbOne = document.querySelector('.one')
const path = document.querySelector('#path')
const origin = document.querySelector('.orb-position')
const orbTwo = document.querySelector('.two')





let matrix = MotionPathPlugin.getAlignMatrix(origin, path, [0.5, 0.5], [0.5, 0.5]),
    dragmePoint = {x: 0, y:0}, 
    dotPoint = matrix.apply(dragmePoint);

const tl = gsap.timeline({repeat:-1});

tl.to(orbOne, {
  x: "+=" + dotPoint.x, 
  y: "+=" + dotPoint.y,
  duration: 4,
  ease: "power1.inOut"
});

tl.to(orbOne, {
    duration: 5, 
    repeat: -1,
    ease: "linear",
    motionPath:{
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5]
    }
  });


  const tlTwo = gsap.timeline({repeat:-1, delay: 1});

  tlTwo.to(orbTwo, {
    x: "+=" + dotPoint.x, 
    y: "+=" + dotPoint.y,
    duration: 4,
    ease: "power1.inOut"
  });
  
  tlTwo.to(orbTwo, {
      duration: 5, 
      repeat: -1,
      ease: "linear",
      motionPath:{
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5]
      }
    });