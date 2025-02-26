document.addEventListener('DOMContentLoaded',() => {
 const counterNum = document.querySelector('#counter')
 let plusOne = document.getElementById('plus')
 let minusOne = document.getElementById('minus')
 const pauseTimer = document.querySelector('#pause')
 const resumeTimer = document.querySelector('#resume')
const heart = document.querySelector('#heart')
const likes = document.querySelector("ul.likes")
// let timeLeft = 0
let numberTracker= {}
const commenter = document.querySelector('#comment-form')
const comments = document.querySelector('#list')

let interval = setInterval(increase, 1000)

pauseTimer.addEventListener('click', function(){
     if(pauseTimer.id==="resume"){
      interval = setInterval(increase,1000)
      pauseTimer.innerText = "pause"
      pauseTimer.id = "pause"
   }else if(pauseTimer.id==="pause"){
      clearInterval(interval) 
   pauseTimer.innerText = 'Resume'
   pauseTimer.id = 'resume'
}
   })


plusOne.addEventListener('click', increase)
minusOne.addEventListener('click', decrease)
heart.addEventListener('click', addLike)

//increase counter
function increase(e){
   counterNum.innerText = parseInt(counter.innerText) + 1
}
//decrease counter
function decrease(){
   counterNum.innerText = parseInt(counter.innerText) - 1
}
//add like
function addLike(){
   let second = counterNum.innerText
   numberTracker[second]= numberTracker[second] || 0 
   numberTracker[second] +=1
   showLikes()
}

function showLikes(){
   likes.innerHTML = ""
   for(let key in numberTracker){
      const li = document.createElement('li')
      li.innerText = `${key} has been liked ${numberTracker[key]} times`
      likes.append(li)
   }
}

commenter.addEventListener('submit', addComment)

function addComment(e){
   e.preventDefault();

   const comment = e.target.querySelector('#comment-input').value
   const li = document.createElement('li')

   li.textContent = `${comment}` ;
  const commentSection =  document.querySelector('#comments')
   commentSection.appendChild(li)
   console.log(li)

//   document.querySelector('#comments').appendChild();
}
})