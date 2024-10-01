let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('.nav-link');
let logoNavbar = document.querySelector('#logoNavbar');
let logoWidth = document.querySelectorAll('.logo');

console.log(logoWidth);




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
        logoWidth.forEach( (dir) =>{
            dir.classList.remove('logoSmall');
            dir.classList.add('logo');
        })
    }
    
});


// arrivato a 50:31:00