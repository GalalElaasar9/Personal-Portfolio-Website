// toggle style switcher 
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.querySelector('.style-switcher');

styleSwitcherToggle.addEventListener('click',function(){
  styleSwitcher.classList.toggle('active');
})
// hide style switcher on scroll 
window.onscroll = function(){
  if(styleSwitcher.classList.contains('active')){
    styleSwitcher.classList.remove('active');
  }
}



// Theme Colors
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
  alternateStyles.forEach((style)=>{
    if(color === style.getAttribute('title')){
      window.localStorage.setItem("color_option",JSON.stringify(style.getAttribute('title')));
      style.removeAttribute('disabled');
    }else{
      style.setAttribute('disabled','true');
    }
  })
}

let colorOption = localStorage.getItem("color_option");
if(colorOption != null){
  color =JSON.parse(colorOption);
  setActiveStyle(color)
}

// Theme light and dark mode
const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', () => {
  dayNight.querySelector("svg").classList.toggle("fa-sun");
  dayNight.querySelector("svg").classList.toggle("fa-moon");
  document.body.classList.toggle('dark');
});

window.addEventListener("load", () =>{
  if(document.body.classList.contains("dark")){
    dayNight.querySelector("svg").classList.add("fa-sun");
  }else{
    dayNight.querySelector("svg").classList.add("fa-moon");
  }
})


