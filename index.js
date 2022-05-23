const flecha_left = document.getElementById("left_img");
const flecha_right = document.getElementById("right_img");
const items = document.getElementsByClassName("imagenes")[0].children;

const menuHamburguer = document.getElementById("menu-hamburger");
const menuClose = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const itemCount = items.length;
let count = 0;

function showNextItem() {
  items[count].classList.remove("visible");

  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("visible");
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove("visible");

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add("visible");
  // Check if working...
  console.log(count);
}

flecha_right.addEventListener("click", showNextItem);
flecha_left.addEventListener("click", showPreviousItem);

setInterval(showNextItem, 5000);

menuHamburguer.addEventListener("click", function () {
  nav.classList.remove("menu-oculto");
});

menuClose.addEventListener("click", function () {
  nav.classList.add("menu-oculto");
});
