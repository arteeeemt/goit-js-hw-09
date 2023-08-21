const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const body = document.querySelector('body')

startBtn.addEventListener('click',startColor)
let color = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  

stopBtn.disabled = true
function startColor(){
    startBtn.disabled = true
    stopBtn.disabled = false
    let changeColorInterval = setInterval(() => {
       body.style.backgroundColor = color()
       
      
      
          
    }, 1000);
    stopBtn.addEventListener('click',function(){
        clearInterval(changeColorInterval)
        startBtn.disabled = false
        stopBtn.disabled = false
    })
    
}




