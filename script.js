// JavaScript para fechar menu ao clicar nos links
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            document.getElementById('menu-toggle').checked = false;
        }
    });
});