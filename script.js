const fourthC = document.querySelector('.circle');
const fourthpos= fourthC.getBoundingClientRect();
const pause= document.querySelector('.pause')
const come = document.querySelector('.come')
const r = document.querySelector(':root');



pause.addEventListener("click", function(){
    
    fourthC.style.animationPlayState = 'paused'
    console.log(fourthpos)
    fourthC.style.top = fourthpos.top+'px'
    // fourthC.style.bottom = fourthpos.bottom+'px'
    fourthC.style.left = fourthpos.left+'px'
    // fourthC.style.right = fourthpos.right+'px'

    console.log(fourthC.style.top)
    console.log(fourthC.style.left)


    r.style.setProperty('--fourth-circle-top', fourthC.style.top);
    r.style.setProperty('--fourth-circle-left', fourthC.style.left);
    
    console.log(fourthC.style)
})

come.addEventListener('click', function(){
    // console.log(come.getBoundingClientRect())
    fourthC.style.animation = 'come 10s linear infinite'
    console.log(fourthC.style)

})



// console.log(fourthC.getBoundingClientRect())

// const interval = setInterval(()=> {
//     console.log(fourthC.getBoundingClientRect())
//   },0);
// console.log(fourthC.getBoundingClientRect())