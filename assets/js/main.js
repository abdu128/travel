/*============show menu===========*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')


/*==========menu show ===========*/

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add("show-menu")
   })

}

/*==========menu hidden======*/
if(navClose){
   navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
   })
}


/*============ REMOVE MENU MOBILE===========*/
navLink=document.querySelectorAll('.nav__link')

function linkAction(){
   const navMenu=document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')

}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*===================== CHANGE BACKGROUND HEADER=============================*/

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===============SWIPER DISCOVER===============*/

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

/*================== VIDEO ================*/
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
      // Pause video
      videoFile.pause(); 
      // We change the icon
      videoIcon.classList.remove('ri-pause-line')
      videoIcon.classList.add('ri-play-line')

  }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
  // Video ends, icon change
  videoIcon.classList.remove('ri-pause-line')
  videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})