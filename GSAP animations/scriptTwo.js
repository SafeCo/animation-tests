
const orbContainer = document.querySelector('.orb-container')
const magicCircle = document.querySelector('.magic-circle')
const box = document.querySelector('.test')

let executed = false

const body = document.querySelector('body')

const intro = document.querySelector('.welcome-text')




//                                                                  MAGIC ORB
for ( i = 0; i < orbContainer.children.length; i++) {
  const orbPos = [[0, 0],[0, 1],[1, 1],[1, 0],[0.5, 0.5]]
  let orb = orbContainer.children[i]
  console.log(orbPos[i][0],[1])

  delta = MotionPathPlugin.getRelativePosition(orb, box, [0.5, 0.5], [orbPos[i][0], orbPos[i][1]]);
  gsap.to(orb, {
    x: "+=" + delta.x,
    y: "+=" + delta.y,
    duration: 2,
    ease: "power2.inOut"
  });
  
}


