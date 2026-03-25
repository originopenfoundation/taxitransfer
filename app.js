document.addEventListener("DOMContentLoaded", function() {

    const toggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const overlay = document.getElementById('menu-overlay');

    if (!toggle || !navbar || !overlay) {
        console.log("❌ Navbar error - element neexistuje");
        return;
    }

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        overlay.classList.remove('active');
    });

    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navbar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

});