const open = document.getElementById('open')
const close = document.getElementById('close')
const container= document.querySelector('.container')
const loadtext = document.querySelector('.loading-text')
const posterimg= document.querySelector('.poster-img')





open.addEventListener('click',()=>{
  container.classList.add('show-nav');
})
close.addEventListener('click',()=>{
  container.classList.remove('show-nav');
})

let loading=0;

let interval= setInterval(bluring, 20);

function bluring(){
  loading++;

  if(loading > 99){
    clearInterval(interval)
  }
  
  loadtext.innerText=`Loading ${loading}%`;
  loadtext.style.opacity=`${scale(loading,1,100,1,0)}`;
  posterimg.style.filter=`blur(${scale(loading,1,100,30,0)}px)`;

}




//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}