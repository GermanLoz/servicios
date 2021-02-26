let buttonRes = document.getElementById("menu-res-servicios");
buttonRes.addEventListener("click", mostrarRess);
let testResponsive = false;
let responsiveA = document.getElementById("nav-ul-servicios");
function mostrarRess(){ 
     if(testResponsive == false){
      responsiveA.classList.add("nostrar-res");
      testResponsive = true;
} else if(testResponsive == true){
      responsiveA.classList.remove("nostrar-res");
      testResponsive = false;
 }
}
/*animaciones   js*/
let containerGrid = document.querySelector(`.Con-grid`);
let grid2 = document.getElementById("grid2");
let grid3 = document.getElementById("grid3");
let grid4 = document.getElementById("grid4");
let grid5 = document.getElementById("grid5");
let grid6 = document.getElementById("grid6");
window.addEventListener(`scroll`, (e) => {
      animarFunct(containerGrid, `animacion-transform`, 500);
      animarFunct(grid2, `animacion-transform`, 500);
      animarFunct(grid3, `animacion-transform`, 500);
      animarFunct(grid4, `animacion-transform`, 500);
      animarFunct(grid5, `animacion-transform`, 500);
      animarFunct(grid6, `animacion-transform`, 500);
});
function animarFunct(animar,animacion, number){
      let srl = document.documentElement.scrollTop;
      let altura = animar.offsetTop;
            if(altura -number < srl){
                  animar.classList.add(animacion);
                  animar.style.opacity="1";
           }
}
containerGrid.addEventListener(`mouseover`, e =>{
      let pchild1 = document.querySelector(`.pchild1`);
      changeColorP(pchild1, containerGrid);
})
grid2.addEventListener(`mouseover`, e =>{
      let pchild2 = document.querySelector(`.pchild2`);
      changeColorP(pchild2, grid2);
})
grid3.addEventListener(`mouseover`, e =>{
      let pchild3 = document.querySelector(`.pchild3`);
      changeColorP(pchild3, grid3);
})
grid4.addEventListener(`mouseover`, e =>{
      let pchild4 = document.querySelector(`.pchild4`);
      changeColorP(pchild4, grid4);
})
grid5.addEventListener(`mouseover`, e =>{
      let pchild5 = document.querySelector(`.pchild5`);
      changeColorP(pchild5, grid5);
})
grid6.addEventListener(`mouseover`, e =>{
      let pchild6 = document.querySelector(`.pchild6`);
      changeColorP(pchild6, grid6);
})
function changeColorP(pchild, grid){
               pchild.style.color="#eee";
               grid.addEventListener(`mouseout`, (e) => {
                     pchild.style.color="#000";
      });
  } 