/*----Galeria - Obras---*/

const imagenes = document.querySelectorAll('.img');
const imgModal = document.querySelector('#imgModal')

imagenes.forEach(img => {
    img.addEventListener('click', (e) => {
        imgModal.src = e.target.src  
        e.target.setAttribute('data-toggle', 'modal')
        e.target.setAttribute('data-target', '#exampleModal')    
    })
})

/*----Header---*/

hamburger = document.querySelector(".hamburger-main");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

/*----Header - sticky---*/

const header_sticky = document.getElementById("header-sticky")

window.onscroll = function () {
  addHeaderSticky()
}

function addHeaderSticky() {
  if (window.pageYOffset === 0) {
    header_sticky.classList.remove("header-sticky")
  } else {
    header_sticky.classList.add("header-sticky")
  }
}