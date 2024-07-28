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
});

navLinks.addEventListener("click", ()=>{
    navLinks.classList.remove("open");
    menuButton.setAttribute("class", "fa-solid fa-bars");
});

const navSearch = document.querySelector(".nav-search");

navSearch.addEventListener("click", ()=>{
    navSearch.classList.toggle("open")
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000"
};

ScrollReveal().reveal(".header-img img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content div", {
    duration: 1000,
    delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    origin:"top",
    delay: 1000,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".deals-card", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".about-img img", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".about-card", {
    duration:1000,
    interval: 500,
    delay: 500,
});

// swiper images
const swiper = new Swiper(".swiper", {
    loop:true,
})