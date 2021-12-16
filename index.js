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




//accordion toggle 
const acc_toggle = document.getElementsByClassName('acc_toggle');
const panel = document.getElementsByClassName('acc_panel');

for(let i = 0; i< acc_toggle.length; i++){
    acc_toggle[i].addEventListener('click', () => {
        panel[i].style.display = panel[i].style.display === 'block' ? 'none' : 'block';

    });
}
