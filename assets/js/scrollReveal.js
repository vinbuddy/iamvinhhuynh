ScrollReveal({
    reset: true,
    duration: 1000,
    opacity: 0
})

var slideUp = {
    reset: true,
    distance: '50px',
    origin: 'bottom',
    duration: 2500,
};
ScrollReveal().reveal('.reveal', slideUp)
ScrollReveal().reveal('.about__notify', {
    distance: '40px',
    origin: 'left',
    reset: true, 
    duration: 1500,
})

