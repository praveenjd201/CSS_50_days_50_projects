const loadingText = document.querySelector('.text-loading');
const bg = document.querySelector('.bg')

let loading =0;
let interval = setInterval(bluring, 20);

function bluring(){
loading++;
if(loading > 99){
  clearInterval(interval)
}
console.log(loading);
loadingText.innerText= ` ${loading}%`
loadingText.style.opacity = scale(loading,1,100,1,0);
bg.style.filter = `blur(${scale(loading,0,100,30,0)}px)`;

}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


