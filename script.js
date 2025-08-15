const toggle_btn = document.querySelector('.toggle_btn');
const toggle_btn_icon = document.querySelector('.toggle_btn i');
const drop_dwon = document.querySelector('.drop_dwon');

toggle_btn.onclick = () => {
    drop_dwon.classList.toggle('open');
    const isOpen = drop_dwon.classList.contains('open');
 
    toggle_btn_icon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
// scroll
window.addEventListener('scroll',()=>{
const navbar = document.querySelector('.navbar');
navbar.classList.toggle('scrolled',window.scrollY>50);
})

