const panels = document.querySelectorAll('.panel');
//onclice effects
// panels.forEach((panel) =>{
//   panel.addEventListener('click',()=>{
//     console.log(panel)
//     // removeActiveClass();
//     // panel.classList.add('active');
//   })
// })

function removeActiveClass(){
  panels.forEach(panel =>{
    panel.classList.remove('active');
  })
}

//hover effect
panels.forEach(panel => {
  panel.addEventListener("mouseover",(event)=>{
    console.log(event.currentTarget)
    removeActiveClass();
    event.target.classList.add('active');
  })
})
