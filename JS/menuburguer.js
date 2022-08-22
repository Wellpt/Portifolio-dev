const btnmobile = document.getElementById('mobile-menu');

function menuBurger(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('clicou');

}

btnmobile.addEventListener('click' , menuBurger);