const toggleNav=()=>{
    
    document.querySelector('.top-bar').classList.toggle('active');
}

const responsiveToggle=()=>{
    if(screen.availWidth<=780){
        return  toggleNav();
    }

    console.log('aea')
}