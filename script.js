const circle = document.querySelector('.circle');
const pause= document.querySelector('.pause')
const come = document.querySelector('.come')
const remove = document.querySelector('.remove')
const r = document.querySelector(':root');
const removeT = document.querySelector('.remove-translate')


pause.addEventListener("click", function(){
    circle.style.animationPlayState = 'paused'    
  
})

remove.addEventListener('click', function(){
    
    let position = circle.getBoundingClientRect()
    r.style.setProperty('--circle-top', position.top+'px');
    r.style.setProperty('--circle-left', position.left+'px');
    // circle.style.transform = 'translate(-50%,-50%)';
    circle.style.animation = 'none'
   
})

removeT.addEventListener('click', function(){
    circle.style.animation = 'none'
    circle.style.transform = 'translate(-50%,-50%)'
})


come.addEventListener('click', function(){
    let circlePosition = come.getBoundingClientRect()
    let position = circle.getBoundingClientRect()
    
    let newLeftPosition = circlePosition.top - position.top
    let newTopPosition = circlePosition.left - position.left

    r.style.setProperty('--come-top', newTopPosition+'px');
    r.style.setProperty('--come-left', newLeftPosition+'px');
    circle.style.animation = 'come 3s linear infinite'
    
})


