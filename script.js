const navBar = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link')

    const navLinks = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFrame 0.5s ease forwards ${index / 7 + .3}s`;
            }
        })

        //animation
        burger.classList.toggle('toggle')

    })



  
}

navBar();

