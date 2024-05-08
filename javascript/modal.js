/*----Modal Obras---*/

// Get the modal
var modal = document.getElementById("myModal-obras");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg-obras");
var modalImg = document.getElementById("img-obras");
var captionText = document.getElementById("caption-modal");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-obras")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}


/*----Header---*/

hamburger = document.querySelector(".hamburger-main");
hamburger.onclick = function () {
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