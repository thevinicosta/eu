const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefaul();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.satAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.satAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.satAttribute('aria-label', 'Abrir Menu');

    }

}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);