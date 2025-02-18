function toggleDarkMode() {
    const slider = document.querySelector('.slider');
    document.body.classList.toggle("dark-mode");
    const logo = document.getElementById('logo');
    const container = document.querySelector('.container');
    container.style.animation = 'none';
    void container.offsetWidth;
    container.style.animation = 'fadeInText 2s ease-out forwards';
    if (document.body.classList.contains('dark-mode')) {
        logo.src = 'CLUB LOGO PNG BUT WHITE.png'; 
    } else {
        logo.src = 'CLUB LOGO PNG.png';
    }
    slider.classList.toggle('active');
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', function() {
        link.style.transform = '';
    });
});
