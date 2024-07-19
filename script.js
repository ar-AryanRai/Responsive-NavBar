let clicked = false;
let ele = document.getElementsByClassName("ham")[0];
let show = document.getElementsByClassName("menu")[0];
let navbar = document.getElementsByTagName("nav")[0];
ele.addEventListener("click", () => {
  if(!clicked){
    show.style.display = "grid";
    navbar.style.boxShadow = "none";
    show.style.boxShadow = "0px 3px 5px -3px grey";
    clicked = true;
  }
  else{
    show.style.display = "none";
    navbar.style.boxShadow = "0px 3px 5px grey";
    clicked = false;
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    show.style.display = "none";
    navbar.style.boxShadow = "0px 3px 5px grey";
    clicked = false;
  }
});