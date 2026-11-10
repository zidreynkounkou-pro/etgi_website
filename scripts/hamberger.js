
    // Ferme le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('menu-toggle').checked = false;
        });
    });