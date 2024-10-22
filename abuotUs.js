let logoPanther = document.querySelector('#logoPanther');

logoPanther.addEventListener('click', ()=>{
    if (logoPanther.src== 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/panther%20logo%201.png'
    }else if (logoPanther.src== 'http://127.0.0.1:5500/Media/panther%20logo%201.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left.png'
    }    
});


let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');

let teachers = [
    {name: 'Daniel', description: 'Singer and guitarist', url: './Media/DanielGildenlow.jpg'},
    {name: 'Manuel', description: 'Bass Player', url: './Media/DanielKarlsson.jpg'},
    {name: 'Johan', description: 'Lead Guitarist', url: './Media/JohanHallgren.jpg'},
    {name: 'Leo', description: 'Drummer', url: './Media/LeoMargarit.png'},
];

teachers.forEach( (docente)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${docente.url})`;
    circle.appendChild(div);
});


let movedDivs = document.querySelectorAll('.moved');

let check = false;

let flipCard = document.querySelector('.flip-card');

let cardWrapper = document.querySelector('#cardWrapper');


opener.addEventListener('click', ()=>{
    if (check == false) {
        opener.style.transform = 'rotate(180deg)';
        movedDivs.forEach( (moved, i)=>{
            let angle = (360 * i) / movedDivs.length;
            
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
        check = true;
    }else{
        check = false;
        opener.style.transform = '';
        movedDivs.forEach( (moved, i)=>{    
            moved.style.transform = ``;
        });
        cardWrapper.innerHTML = '';        
    }
    
});


let cardName = document.querySelector('#cardName');
let cardDescription = document.querySelector('#cardDescription');


movedDivs.forEach( (moved, i)=>{
    moved.addEventListener('click', ()=>{
        let docente = teachers[i];
        cardWrapper.innerHTML = '';

        let div = document.createElement('div');
        div.classList.add('flip-card');
        div.innerHTML = `
        <div class="inner">
            <div class="inner-face"></div>
            <div class="inner-back">
                <p id="cardName" class="h4 fs-1">${docente.name}</p>
                <p id="cardDescription" class="lead fs-3">${docente.description}</p>
            </div>
        </div>
        `;

        cardWrapper.appendChild(div);
        
        let innerFace = document.querySelector('.inner-face');
        innerFace.style.backgroundImage = `url(${docente.url})`;
        
    })
    
});
