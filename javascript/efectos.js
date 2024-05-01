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

/*----Slider Portada Index---*/

const imagenesFondo = ['imagenes/portada-index-01.webp', 'imagenes/portada-index-02.png', 'imagenes/portada-index-03.webp']; // Agrega aquí la lista de tus imágenes de fondo
let indiceImagen = 0;

function cambiarFondo() {
    document.querySelector('.portada-index').style.backgroundImage = `url(${imagenesFondo[indiceImagen]})`;
    indiceImagen = (indiceImagen + 1) % imagenesFondo.length;
}

setInterval(cambiarFondo, 3000);

/*----Contador---*/

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

/*----Servicios---*/

document.addEventListener("DOMContentLoaded", function() {
  //Seleccionamos los elementos que usaremos
  const cards = document.querySelectorAll('.card');
  const container = document.querySelector('.container-servici');
  const imgsFond = document.querySelectorAll('.imgFond');
  //Hacemos un ForEach que recorrera las Cards y nos votara dos elementos: 
  //(La card como elementos, La posición de la card)
  cards.forEach((card, index) => {
      //Detecta que estamos sobre una card
      card.addEventListener('mouseover', () => {
          //Recorremos nuevamente las Cards, esto para poder agregar la clase fade a cada card
          cards.forEach((otherCard, otherIndex) => {
              //Si el indice de la Card no es la misma al indice de la Card sobre la que estamos
              if (index !== otherIndex) {
                  //Agregamos la clase "fade"
                  otherCard.classList.add('fade');
              }
          });
          //Establecemos como fondo del container la imagen de fondo cada card.
          container.style.backgroundImage = `url('${imgsFond[index].src}')`;
      });
      //Detecta que ya no estamos sobre una card
      card.addEventListener('mouseout', () => {
          cards.forEach((otherCard, otherIndex) => {
              //Recorremos nuevamente las Cards, esto para poder quita la clase fade a cada card
              if (index !== otherIndex) {
                  //Quitamos las clase fade de la card
                  otherCard.classList.remove('fade');
              }               
          });
      });
  });
});

/*----Testimonial Slider---*/

const slidertesti = function () {
    const slides = document.querySelectorAll('.slide-testi');
    const btnLeft = document.querySelector('.slide-testi__btn--left');
    const btnRight = document.querySelector('.slide-testi__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slidertesti();

/*----Proyectos---*/

const slider=document.querySelector(".slider");
let sliderSection=document.querySelectorAll(".section-slider");
let slider_sectionLast=sliderSection[sliderSection.length-1];

let autoSlideEnabled = true;
const delayAmimation = 3000;//Delay del carrucel

const btnRight=document.querySelector("#BtnR");
const btnLeft=document.querySelector("#BtnL");

const rootStyles = getComputedStyle(document.documentElement);
const widthImg = parseFloat(rootStyles.getPropertyValue('--widthImg'));

slider.insertAdjacentElement('afterbegin',slider_sectionLast);

function next(){
    let slider_sectionFirts=document.querySelectorAll(".section-slider")[0];
    slider.style.marginLeft=`-${widthImg*2}`;
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',slider_sectionFirts);
        slider.style.marginLeft=`-${widthImg}`;  
    }, 500);
}

function prev(){
    let sliderSection=document.querySelectorAll(".section-slider");
    let slider_sectionLast=sliderSection[sliderSection.length-1];
    slider.style.marginLeft="0";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',slider_sectionLast);
        slider.style.marginLeft=`-${widthImg}`;  
    }, 500);
}

btnRight.addEventListener('click', function() {
    next();
    autoSlideEnabled = false; // Desactiva el carrusel automático
    setTimeout(() => {
        autoSlideEnabled = true; // Vuelve a activar el carrusel automático después del delayAmination
    }, delayAmimation);
});

btnLeft.addEventListener('click', function() {
    prev();
    autoSlideEnabled = false; // Desactiva el carrusel automático
    setTimeout(() => {
        autoSlideEnabled = true; // Vuelve a activar el carrusel automático después del delayAmination
    }, delayAmimation);
});

function autoSlide() {
    if (autoSlideEnabled) {
        next();
    }
}

setInterval(autoSlide, delayAmimation); // Inicia el carrusel automático

const fondText = document.getElementById('FondText-text');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    fondText.style.transform = `translate(calc(45% - ${scrolled}px))`;
});

/*----Validad Formulario---*/

function validarFormulario() {
    var nombreApellido = document.getElementById("nombre_apellido").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar que todos los campos estén llenos
    if (nombreApellido === "" || correo === "" || telefono === "" || mensaje === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    // Validar el formato del correo electrónico
    var correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegExp.test(correo)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false;
    }

    // Validar que el número de teléfono contenga solo números
    var telefonoRegExp = /^\d+$/;
    if (!telefonoRegExp.test(telefono)) {
        alert("Por favor ingrese solo números en el campo de teléfono.");
        return false;
    }

    return true;
}

