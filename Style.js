document.getElementById('backToTop').addEventListener('click', function() {window.scrollTo(0, 0);});



window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.nav');
    let header = document.querySelector('.header');
    let titleHeight = header.offsetHeight;

    if (window.scrollY > titleHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

