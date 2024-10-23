// Chiamate Asincrone

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let confirm = true;

function createInterval(n, element, time) {
    let counter = 0;
    
    let interval = setInterval( () => {
        if (counter < n) {
            counter++
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
        
    }, time);
    
    setTimeout(() => {
        confirm = true;
    }, 5000);
    
}




let starterPoint = new IntersectionObserver( (entries)=>{
    entries.forEach( (entry)=> {
        if (entry.isIntersecting && confirm) {
            createInterval(100, firstNumber, 10);
            createInterval(15, secondNumber, 100);
            createInterval(250, thirdNumber, 1);
            confirm = false;
        }
    });
} );

starterPoint.observe(firstNumber);





// Recensioni e Swiper

let reviews = [
    {user: 'Cicala84', description: `Sempre fantastici!!`, rank: 5},
    {user: 'Raziel82', description: `Li adoro!!`, rank: 5},
    {user: 'Antonio', description: `Esistono ancora metallari?`, rank: 1},
    {user: 'Filippo', description: `Boomer`, rank: 1},
    {user: 'Manuela', description: `I due commenti che precedono il mio non sono attendibili!`, rank: 5},
]

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach( (recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
        <div class="card-review">
            <p class="lead2 text-center roboto-mono-">${recensione.description}</p>
            <p class="h4 Times-New-Roman">${recensione.user}</p>
            <div class="d-flex justify-content-center star">

            </div>
        </div>
        `;
        swiperWrapper.appendChild(div);
})

let stars = document.querySelectorAll('.star');

// <i class="fa-solid fa-star"></i>  

stars.forEach( (star, index)=>{

    for (let i = 1; i <= reviews[index].rank; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon);
    }

    let diffence = 5 - reviews[index].rank;

    for (let i = 1; i <= diffence; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star');
        star.appendChild(icon);
    }

});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    loop: true,
    
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});













// 02:26:30