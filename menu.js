
const button = document.getElementById('buttonMenu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); //adiciona a classe e remove caso tenha
}

button.addEventListener('click', toggleMenu);