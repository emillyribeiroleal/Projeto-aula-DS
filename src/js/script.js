const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click", ()=> { 
    navMenu.classList.toggle("active"); //classList acessa seletores/classes css
    menuIcone.classList.toggle("open");
})