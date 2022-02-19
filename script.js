const circle = document.querySelector('.circle');
const pause= document.querySelector('.pause')
const come = document.querySelector('.come')
const remove = document.querySelector('.remove')
const r = document.querySelector(':root');



pause.addEventListener("click", function(){
    circle.style.animationPlayState = 'paused'    
    let position = circle.getBoundingClientRect()
    console.log('when paused')
    console.log(position)
})

remove.addEventListener('click', function(){
    let position = circle.getBoundingClientRect()
    r.style.setProperty('--circle-top', position.top+'px');
    r.style.setProperty('--circle-left', position.left+'px');
    circle.style.animation = 'none'
    console.log('when animation removed')
    console.log(position)
})




come.addEventListener('click', function(){
    let cposition = come.getBoundingClientRect()
    let position = circle.getBoundingClientRect()
    console.log('when animation come intialised first is button, second is circle')
    console.log(cposition)
    console.log(position)
    r.style.setProperty('--come-top', cposition.top+'px');
    r.style.setProperty('--come-left', cposition.left+'px');
    circle.style.animation = 'come 3s linear infinite'
    console.log('when animation come executed firs is button, second is circle')
    console.log(cposition)
    console.log(position)

})


