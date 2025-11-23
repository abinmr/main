const downArrows = document.querySelectorAll(".down-arrow");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const container = document.getElementById("container");

downArrows.forEach((arrow) => {
    const toggleFooterSection = () => {
        const footerNav = arrow.closest(".footer-nav");
        if (!footerNav) return;

        const footerList = footerNav.nextElementSibling;
        const isVisible = footerList.classList.toggle("show-footer");
        
        arrow.style.transform = isVisible ? 'rotate(180deg)' : 'rotate(0deg)';
    }
    arrow.addEventListener("click", toggleFooterSection);
})


menuToggle.addEventListener("click", () => {
    menuToggle.style.display = "none";
    closeMenu.style.display = "block";
    mobileMenu.style.display = "block";
    mobileMenu.style.transition = "all 1s ease-in-out"
})

closeMenu.addEventListener("click", () => {
    menuToggle.style.display = "block"
    closeMenu.style.display = "none";
    mobileMenu.style.display = "none";
})

let lastWidth = window.innerWidth;
window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    
    if ((lastWidth <= 850 && currentWidth > 850) || (lastWidth > 850 && currentWidth <= 850)) {
        mobileMenu.style.display = "none";
        
       if (currentWidth > 850) {
            menuToggle.style.display = "";
            closeMenu.style.display = "";
        } else {
            menuToggle.style.display = "";
            closeMenu.style.display = "";
        }
    }
    
    lastWidth = currentWidth;
})


