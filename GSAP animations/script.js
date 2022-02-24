const orbContainer = document.querySelector('.orb-container')
const orbOne = document.querySelector('.one')
const orbTwo = document.querySelector('.two')
const path = document.querySelector('#path')
const pathView = document.querySelector('#path-view')


//                                                                  MAGIC ORB

let p =MotionPathPlugin.getRelativePosition(orbOne, pathView, [0.5, 0.5],{x:110,y:5})

const tl = gsap.timeline({repeat:1});

let rawPath = MotionPathPlugin.getRawPath("#path"),
    pl;
MotionPathPlugin.cacheRawPathMeasurements(rawPath);



for(i = 0; i < orbContainer.children.length; i++){

  const orbPathPositions = [[0, 1],[0.2, 1.2],[0.4, 1.4],[0.6, 1.6],[0.8, 1.8],[1, 2]]
  let orb = orbContainer.children[i]
 
  p = MotionPathPlugin.getPositionOnPath(rawPath, orbPathPositions[i][0])

  let bbox = path.getBBox();

  let rl =MotionPathPlugin.getRelativePosition(orb, path, [0.5, 0.5],{
    x:p.x - bbox.x,
    y:p.y - bbox.y
  })

  tl.to(orb, {
    x: "+=" + rl.x, 
    y: "+=" + rl.y,
    duration: 4,
    ease: "power1.inOut"
  }, 0);



  tl.to(orb, {
      duration: 5, 
      repeat: 5,
      ease: "linear",
      motionPath:{
        start: orbPathPositions[i][0],
        end: orbPathPositions[i][1],
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5]
      }
    },"allspin");
}


//                                                                  MAGIC CIRCLE



const origPrevious = document.querySelector('.magic-circle')

var orig = origPrevious.querySelectorAll('path'), length, timer;

console.log(orig.length)


testone(0)
testtwo(1)
testthree(2)
testfour(3)





function testone (an){
  let obj = {length:0,
            pathLength: orig[an].getTotalLength()};


  let t = gsap.to(obj, {duration: 10, length:obj.pathLength, onUpdate:drawLine, ease:"none"})

  function drawLine() {
    orig[an].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}

function testtwo (an){
  let obj = {length:0,
    pathLength: orig[an].getTotalLength()};


let t = gsap.to(obj, {duration: 10, length:obj.pathLength, onUpdate:drawLine, ease:"none"})

function drawLine() {
orig[an].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}

function testthree (an){
  let obj = {length:0,
    pathLength: orig[an].getTotalLength()};


let t = gsap.to(obj, {duration: 10, length:obj.pathLength, onUpdate:drawLine, ease:"none"})

function drawLine() {
orig[an].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}

function testfour (an){
  let obj = {length:0,
    pathLength: orig[an].getTotalLength()};


let t = gsap.to(obj, {duration: 10, length:obj.pathLength, onUpdate:drawLine, ease:"none"})

function drawLine() {
orig[an].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}


//                                                                  MAGIC TEXT



const magicText = document.querySelector('.magic-text')
gsap.fromTo(magicText,{opacity:0}, {rotation:90, duration:12, opacity: 1})


//                                                                  MAGIC BALL



const whiteBall = document.querySelector('.white-ball')
const blueBall = document.querySelector('.blue-ball')



const magicBallTl = gsap.timeline()

// magicBallTl.staggerFromTo(whiteBall, 0.5, {scale:0}, {scale:0.5, repeat:-1, yoyo:true}, 0.1);
// magicBallTl.staggerFromTo(blueBall, 0.5, {scale:0}, {scale:0.5, repeat:-1, yoyo:true}, 0.1);


magicBallTl.fromTo(whiteBall,0.7, {scale:0.1}, {scale:0.15, repeat: 5, yoyo:true},"smallState" )
          .fromTo(blueBall,0.7, {scale:0.1}, {scale: 0.2, repeat: 5, yoyo:true},"smallState" )
          .fromTo(whiteBall,1, {scale:0.15}, {scale:0.5, repeat: 5, yoyo:true},"mediumState" )
          .fromTo(blueBall,1, {scale:0.2}, {scale: 0.4, repeat: 5, yoyo:true},"mediumState"  )
          .fromTo(whiteBall,1, {scale:0.15}, {scale:0.3, repeat: 3, yoyo:true},"bigState" )
          .fromTo(blueBall,1, {scale:0.2}, {scale: 0.3, repeat: 3, yoyo:true},"bigState")
          .fromTo(whiteBall,1, {scale:0.15}, {scale:0.22},"stablingState" )
          .fromTo(whiteBall,1, {scale:0.22}, {scale:0.23, repeat: -1, yoyo:true},"stableState" )
          .fromTo(blueBall,1, {scale:0.2}, {scale: 0.24, repeat: -1, yoyo:true},"stableState")
