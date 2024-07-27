const menubar = document.getElementById("menu-bar");
const navLinks = document.getElementById("nav-links");
const menuButton = menubar.querySelector("i");

menubar.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    if(isOpen){
        menuButton.setAttribute("class", "fa-solid fa-xmark");

    }else {
        menuButton.setAttribute("class", "fa-solid fa-bars");
    }
})