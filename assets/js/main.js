const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')




if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add("show-menu")
   })

}


if(navClose){
   navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
   })
}


navLink=document.querySelectorAll('.nav__link')

function linkAction(){
   const navMenu=document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')

}
navLink.forEach(n=>n.addEventListener('click',linkAction))


function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


let swiper = new Swiper(".discover__container", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   loop: true,
   spaceBetween: -100,
   coverflowEffect: {
       rotate: 0,
   },
})

const videoFile =document.getElementById('video-file'),
      videoButton=document.getElementById('video-button'),
      videoIcon=document.getElementById('video-icon')

function playPause(){
   if(videoFile.paused){
      videoFile.play()

      videoIcon.classList.add('ri-pause-line')
      videoIcon.classList.remove('ri-play-line')
   }
   else {
  
      videoFile.pause(); 
   
      videoIcon.classList.remove('ri-pause-line')
      videoIcon.classList.add('ri-play-line')

  }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){

  videoIcon.classList.remove('ri-pause-line')
  videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener('ended', finalVideo)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
