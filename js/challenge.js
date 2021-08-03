document.addEventListener('DOMContentLoaded',() => {
 const counterNum = document.querySelector('#counter')
 let plusOne = document.getElementById('plus')
 let minusOne = document.getElementById('minus')
 const pauseTimer = document.querySelector('#pause')
 const resumeTimer = document.querySelector('#resume')
const heart = document.querySelector('#heart')
const likes = document.querySelector("ul.likes")
let timeLeft = 0
let numberTracker= {}

let interval = setInterval(increase, 1000)

pauseTimer.addEventListener('click', function(){
   clearInterval(interval) 
   pauseTimer.innerText = 'Resume'
   pauseTimer.id = 'resume'
})
plusOne.addEventListener('click', increase)
minusOne.addEventListener('click', decrease)
heart.addEventListener('click', addLike)
function increase(e){
   counterNum.innerText = parseInt(counter.innerText) + 1
}

function decrease(){
   counterNum.innerText = parseInt(counter.innerText) - 1
}

function addLike(){
   let second = counterNum.innerText
   numberTracker[second]= numberTracker[second] || 0 
   numberTracker[second] +=1
   renLikes()
}
function renLikes(){
   likes.innerHTML = ""
   for(let key in numberTracker){
      const li = document.createElement('li')
      li.innerText = `${key} has been liked ${numberTracker[key]} times`
      likes.append(li)
   }
}

});