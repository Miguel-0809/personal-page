const toggleNav=()=>{
    
    document.querySelector('.top-bar').classList.toggle('active');
}

const responsiveToggle=()=>{
    if(screen.availWidth<=780){
        return  toggleNav();
    }

    console.log('aea')
}

//SCROLL REVEAL
window.sr = ScrollReveal();



if(screen.availWidth>=780){
    sr.reveal('.home-intro', {
        duration:3000,
        origin: 'bottom',
        distance: '100px',
        reset: true
    });

    sr.reveal('.top-bar', {
        duration:3000,
        origin: 'bottom',
        distance: '-100px',
        reset: true
    });
}


sr.reveal('.inicio-content', {
    duration: 4000,
    origin: 'left',
    distance: '400px',
    reset: true
});

sr.reveal('.project-card', {
    duration: 4000,
    origin: 'bottom',
    distance: '100px',
    reset: true
});


sr.reveal('.form-contact', {
    duration: 3000,
    origin: 'left',
    distance: '400px',
    reset: true
});

