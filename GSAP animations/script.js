const orbContainer = document.querySelector('.orb-container')
const orbOne = document.querySelector('.one')
const orbTwo = document.querySelector('.two')
const path = document.querySelector('#path')
const pathView = document.querySelector('#path-view')

// let p =MotionPathPlugin.getRelativePosition(orbOne, pathView, [0.5, 0.5],{x:110,y:5})

const tl = gsap.timeline({repeat:1});

let rawPath = MotionPathPlugin.getRawPath("#path"),
    pl;
MotionPathPlugin.cacheRawPathMeasurements(rawPath);
 



// for(i = 0; i < orbContainer.children.length; i++){

//   const orbPathPositions = [[0, 1],[0.2, 1.2],[0.4, 1.4],[0.6, 1.6],[0.8, 1.8],[1, 2]]
//   let orb = orbContainer.children[i]
//   // let p =MotionPathPlugin.getRelativePosition(orb, pathView, [0.5, 0.5],{x:110,y:5})
//   p = MotionPathPlugin.getPositionOnPath(rawPath, 0)
  
  
//   tl.to(orb, {
//     x: "+=" + p.x, 
//     y: "+=" + p.y,
//     duration: 4,
//     ease: "power1.inOut"
//   }, 0);



//   tl.to(orb, {
//       duration: 5, 
//       repeat: -1,
//       ease: "linear",
//       motionPath:{
//         start: orbPathPositions[i][0],
//         end: orbPathPositions[i][1],
//         path: "#path",
//         align: "#path",
//         alignOrigin: [0.5, 0.5]
//       }
//     });
// }


// let p =MotionPathPlugin.getRelativePosition(orbOne, pathView, [0.5, 0.5],{x:110,y:5})
p = MotionPathPlugin.getPositionOnPath(rawPath, 1)

let zl =MotionPathPlugin.getRelativePosition(orbOne, path, [0.5, 0.5],{x:p.x,y:p.y})
let matrix = MotionPathPlugin.getGlobalMatrix(path),
    // 0,0 is the top left corner, but you can use any local coordinates.
    localPoint = {x: p.x, y: p.y}, 
    // get a new point with the matrix transformations applied.
    z = matrix.apply(localPoint);

console.log(rawPath)
console.log(p)
console.log(z)
console.log(zl)

tl.to(orbOne, {
  x: "+=" + zl.x, 
  y: "+=" + zl.y,
  duration: 4,
  ease: "power1.inOut"
}, 0);



tl.to(orbOne, {
    duration: 5, 
    repeat: 1,
    ease: "linear",
    motionPath:{
      start: 0,
      end: 1,
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5]
    }
  });