const toggleBtn = document.getElementById('toggleBtn');
const menu = document.getElementById('menuList');
const closebtn = document.getElementById('closeBtn');

toggleBtn.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('show_menu');
})

closebtn.addEventListener('click', () => {
    menu.classList.remove('show_menu');
});