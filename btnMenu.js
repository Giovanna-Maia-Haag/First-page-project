/*MENU BOTAO*/
const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.btnMenu_open');
const btnMenuClose = document.querySelector('.btnMenu_close');


btnMenuOpen.addEventListener('click',function(){
    menu.classList.add('menu_open');
})
btnMenuClose.addEventListener('click',function(){
    menu.classList.remove('menu_open');
})


const galeriaImagemPNG = document.querySelector('.galeria_imagem-png');

galeriaImagemPNG.addEventListener('click',function(){
    galeriaImagemPNG.add('galeria_imagem-png');
})
/*_______________________________________________________________________________________________*/

/*GALERIA FULLSCREEN*/

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");

// Quando clica numa imagem da galeria
document.querySelectorAll(".galeria_imagem-png").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

// Quando clica no botão "X" ou fora da imagem
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  }
});