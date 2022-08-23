const btnmobile = document.querySelector('#mobile-menu');

function menuBurger(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('#nav');
    nav.classList.toggle('clicou');

}

btnmobile.addEventListener('click' , menuBurger);