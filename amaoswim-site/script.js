/*document.addEventListener('DOMContentLoaded', function() {
    // Transformar o nav em menu hamburguer no mobile
    const nav = document.querySelector('nav');
    const navLinks = nav.innerHTML;
    const menuToggle = document.createElement('div');

    menuToggle.innerHTML = '☰';
    menuToggle.style.fontSize = '24px';
    menuToggle.style.cursor = 'pointer';
    menuToggle.style.padding = '10px';

    // Apenas para mobile
    if (window.innerWidth <= 768) {
        nav.innerHTML = '';
        nav.appendChild(menuToggle);

        menuToggle.addEventListener('click', function() {
            nav.innerHTML = nav.innerHTML.includes('SHOP ALL')
                ? menuToggle.outerHTML
                : menuToggle.outerHTML + navLinks;
        });
    }
});

 */