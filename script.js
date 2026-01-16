// dom selector
const navToggle = document.querySelector(".nav-toggle");
console.log(navToggle);
const navBarMenu = document.querySelector(".nab-list");

navToggle.addEventListener("click", ()=>{
    navToggle.classList.toggle('active');
    navBarMenu.classList.toggle('active');
});