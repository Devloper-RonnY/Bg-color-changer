const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color
  }
  let change;
  const startChangingColor = function(){
    if(!change){
      change = setInterval(randomBg,1000)
    }
    
    
    function randomBg (){
      document.body.style.backgroundColor = randomColor()
    }
  }
  const stopChangingColor = function(){
     clearInterval(change)
     change = null
  }
  
  const startBtn = document.querySelector('#start').addEventListener('click', startChangingColor)
  
  const stopBtn = document.querySelector('#stop').addEventListener('click', stopChangingColor)