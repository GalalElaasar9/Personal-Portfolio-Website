// typed 
var typed = new Typed('.typing',{
  strings:["","Web Developer","Mentor FrontEnd","Web Designer"],
  typeSpeed:100,
  BackSpeed:80,
  loop: true
})
// Aside 
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');

navList.forEach(li => {
  li.addEventListener('click',function(){
    aside.classList.remove('active');
    navTogglerBtn.classList.remove('active');
    // for(let i =0; i < totalSection; i++){
    //   allSection[i].classList.remove('open');
    // }
  })
})
      totalNavList = navList.length;
      allSection = document.querySelectorAll('.section');
      totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a")
  a.addEventListener('click',function(){

    removeBackSection();

    for (let j = 0; j < totalNavList; j++){
      if(navList[j].querySelector("a").classList.contains("active")){
        addBackSection(j);
      }
        navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);
    if(window.innerWidth < 1200){
      asideSectionTogglerBtn();
    }
  })
}


function removeBackSection(){
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section")
  }
}
function addBackSection(num){
  allSection[num].classList.add("back-section");
}
function showSection(element){
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active")
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add('active')
}
function updateNav(element) {
  for(let i =0; i < totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector('.hire-me').addEventListener('click',function(){
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this)
  removeBackSection();
  addBackSection(sectionIndex);
})


const aside = document.querySelector('.aside');
const navTogglerBtn = document.querySelector('.nav-toggler');

navTogglerBtn.addEventListener('click',function(){
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
  aside.classList.toggle("active");
  navTogglerBtn.classList.toggle("active");
  // for(let i =0; i < totalSection; i++){
  //   allSection[i].classList.toggle('open');
  // }
}

const formControl = document.querySelectorAll('.form-control');

formControl.forEach(form => {
  form.addEventListener('keyup',function(){
    if(this.value.charCodeAt(0) < 200){
      this.style.direction = "ltr"
    }else{
      this.style.direction = "rtl";
      this.setAttribute('placeholder', this.getAttribute('data-class'));
    }
  })
});
