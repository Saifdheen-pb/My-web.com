const header = document.querySelector('header');
window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky",window.scrollY > 100);

});

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.addEventListener('scroll', () => {
    // If you want the menu to close on scroll, keep these lines
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
});
