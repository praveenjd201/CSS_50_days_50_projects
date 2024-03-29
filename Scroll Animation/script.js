const boxes  = document.querySelectorAll('.container');

window.addEventListener('scroll',checkout);


function checkout(){
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach((box)=>{
    let boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    console.log(triggerBottom)
    if(boxTop < triggerBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')    }
    
  })

} 