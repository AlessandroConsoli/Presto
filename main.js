let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let logoWidth = document.querySelectorAll('.logo');
let logoPanther = document.querySelector('#logoPanther');
let check = false;






window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove('bg-gunmetal');
        navbar.classList.add('bg-ashGray');
        navbar.style.height= '70px';
        links.forEach( (link)=> {
            link.style.color= 'var(--gunmetal)';
        })
        logoNavbar.src= 'http://127.0.0.1:5500/Media/logo%20gunMetal.png';
        logoPanther.src= 'http://127.0.0.1:5500/Media/panther%20logo%202.png'
        logoWidth.forEach( (dir) =>{
            dir.classList.remove('logo');
            dir.classList.add('logoSmall');
        })
        
    }else{
        navbar.classList.remove('bg-ashGray');
        navbar.classList.add('bg-gunmetal');
        navbar.style.height= '100px';
        links.forEach( (link)=> {
            link.style.color= 'var(--jasper)';
        })
        logoNavbar.src= 'http://127.0.0.1:5500/Media/logo%20jasper.png'
        logoPanther.src= 'http://127.0.0.1:5500/Media/panther%20logo%201.png'
        logoWidth.forEach( (dir) =>{
            dir.classList.remove('logoSmall');
            dir.classList.add('logo');
        })
    }
    
});

logoPanther.addEventListener('click', ()=>{
    if (logoPanther.src== 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/panther%20logo%201.png'
    }else if (logoPanther.src== 'http://127.0.0.1:5500/Media/panther%20logo%201.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left.png'
    }else if (logoPanther.src== 'http://127.0.0.1:5500/Media/panther%20logo%202.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left%202.png'
    }else if (logoPanther.src== 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left%202.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/panther%20logo%202.png'
    }     
});





// logo scuro bocca aperta
// logoPanther.src= 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left%202.png'

// logo scuro bocca chiusa
// logoPanther.src= 'http://127.0.0.1:5500/Media/panther%20logo%202.png'

