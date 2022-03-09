const animationContainer = document.querySelector('.animation-container')
const orbContainer = document.querySelector('.orb-container')
const path = document.querySelector('#path')
const magicText = document.querySelector('.magic-text')
const magicCircle = document.querySelector('.magic-circle')
const blueExplosion = document.querySelector(".blue-explosion")
const aMButton = document.querySelector(".about-me-button")

let executed = false

const body = document.querySelector('body')

const intro = document.querySelector('.welcome-text')

const whiteBall = document.querySelector('.white-ball')
const blueBall = document.querySelector('.blue-ball')



//                                                                  MAGIC ORB
const tl = gsap.timeline();
tl.set(blueExplosion,{autoAlpha:0});
tl.set(magicCircle,{autoAlpha:0});
tl.set(whiteBall, {autoAlpha:0});
tl.set(blueBall, {autoAlpha:0});
tl.set(intro,{autoAlpha:0})



let rawPath = MotionPathPlugin.getRawPath("#path"),
    pl;
MotionPathPlugin.cacheRawPathMeasurements(rawPath);

const secondTl= gsap.timeline();

tl.add(secondTl)


for(i = 0; i < orbContainer.children.length; i++){

  const orbPathPositions = [[0, 1],[0.2, 1.2],[0.4, 1.4],[0.6, 1.6],[0.8, 1.8],[1, 2]]
  let orb = orbContainer.children[i]
 
  p = MotionPathPlugin.getPositionOnPath(rawPath, orbPathPositions[i][0])

  let bbox = path.getBBox();

  let rl =MotionPathPlugin.getRelativePosition(orb, path, [0.5, 0.5],{
    x:p.x - bbox.x,
    y:p.y - bbox.y
  })

  secondTl.to(orb, {
    x: "+=" + rl.x, 
    y: "+=" + rl.y,
    duration: 3,
    ease: "power1.inOut"
  }, 0);

  secondTl.to(orb, {
      duration:10,
      repeat: -1,
      onsStart: function(){fastSpin()},
      ease: "linear",
      motionPath:{
        start: orbPathPositions[i][0],
        end: orbPathPositions[i][1],
        ease: "power1.easeIn",
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5]
      }
    },"allspin");

    function fastSpin (){

      if(executed == false && i == 5){
        const speed = gsap.timeline()
        speed.fromTo(secondTl,{timeScale:1},{timeScale:5, ease:"Power1.easeInOut", duration:12, onEnd:function(){console.log("working3")}})
        speed.to(secondTl,{timeScale:1, ease:"Power1.easeOut", duration: 10, onStart: function(){console.log('stopped')}})
        executed = true
      }
    }
    
}


tl.call(testone, [0],"<+=10")
tl.call(testtwo, [1],"<")
tl.call(testthree, [2],"<")
tl.call(testfour, [3],"<")
tl.to(magicCircle,{autoAlpha:1},"<+=0.1")


//                                                                  MAGIC CIRCLE





const circlePath = magicCircle.querySelectorAll('path')

function testone (num){
  let obj = {length:0,
            pathLength: circlePath[num].getTotalLength()};

  gsap.to(obj, {duration: 5, length:obj.pathLength, onUpdate:drawLine, ease:"none", onComplete: function(){replaceCircle()}})

  function drawLine() {
    circlePath[num].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}

function replaceCircle (){
  const animationParetNode = magicCircle.parentNode
  
  let img = document.createElement('img');
  img.src = 
  "./MCSVG/Magic Circle No Text.svg";
  img.classList.add("centre", "magic-circle");
  animationParetNode.insertBefore(img, magicText);
  magicCircle.remove();
}


function testtwo (an){
  let obj = {length:0,
    pathLength: circlePath[an].getTotalLength()};


let t = gsap.to(obj, {duration: 5, length:obj.pathLength, onUpdate:drawLine, ease:"none"})

function drawLine() {
  circlePath[an].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}

function testthree (an){
  let obj = {length:0,
    pathLength: circlePath[an].getTotalLength()};


let t = gsap.to(obj, {duration: 5, length:obj.pathLength, onUpdate:drawLine, ease:"none"})

function drawLine() {
  circlePath[an].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}

function testfour (an){
  let obj = {length:0,
    pathLength: circlePath[an].getTotalLength()};


let t = gsap.to(obj, {duration: 5, length:obj.pathLength, onUpdate:drawLine, ease:"none"})

function drawLine() {
  circlePath[an].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
  }
}


//                                                                  MAGIC TEXT




tl.fromTo(magicText,{autoAlpha:0}, {duration:12, autoAlpha:1},"<+=3")
tl.to(magicText, {rotation:360, duration:36, repeat: -1, ease: "linear"},"<+=1")


//                                                                  MAGIC BALL

const textTl = gsap.timeline()


tl.set(whiteBall, {autoAlpha:1},"<")
  .set(blueBall, {autoAlpha:1},"<")
  .fromTo(whiteBall, {scale:0.1}, {scale:0.15, duration:1, repeat: 3, yoyo:true},"<" )
  .fromTo(blueBall, {scale:0.1}, {scale: 0.2, duration:1, repeat: 3, yoyo:true},"<" )
  .fromTo(whiteBall, {scale:0.15}, {scale:0.5,duration:3, repeat: 3, yoyo:true},">" )
  .fromTo(blueBall, {scale:0.2}, {scale: 0.4, duration:3, repeat: 3, yoyo:true},"<"  )
  .add(textTl)
  .fromTo(whiteBall, {scale:0.15}, {scale:0.3, duration:1, repeat: 3, yoyo:true},">" )
  .fromTo(blueBall, {scale:0.2}, {scale: 0.3,duration:1,  repeat: 3, yoyo:true},"<")
  .fromTo(whiteBall,1, {scale:0.15}, {scale:0.21,duration:1,  repeat: -1, yoyo:true},">" )
  .fromTo(blueBall, {scale:0.2}, {scale: 0.22,duration:1,  repeat: -1, yoyo:true},"<")

  //                                                                  MY NAME IS SAIF A FRONTEND WEB DEVLEOPER


  textTl.set(blueExplosion, {autoAlpha:1})
        .to(blueExplosion, {scale:10, duration:6},"<")
        .to(animationContainer,{scale:0.5, y:0,x: 300, duration: 5,filter: "blur(4px)", ease: "power1.InOut"},"<+=1")
        .to(blueExplosion, {autoAlpha:0, duration:6},"<")
        .to(intro, {autoAlpha:1} ,"<-=1")
        .to(intro, { y:-100,x:-300,scale:2, ease:"Power1.InOut", duration: 5} ,"<")
        .call(testremove)

function testremove(){
  blueExplosion.remove()
}
  //                                                                  About Me Button

aMButton.addEventListener("click", function(){
  console.log("hello")
  window.location = "./About Me.html"
})



  

 

