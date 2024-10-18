let logoPanther = document.querySelector('#logoPanther');

logoPanther.addEventListener('click', ()=>{
    if (logoPanther.src== 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/panther%20logo%201.png'
    }else if (logoPanther.src== 'http://127.0.0.1:5500/Media/panther%20logo%201.png') {
        logoPanther.src= 'http://127.0.0.1:5500/Media/Rage%20panther%20logo%20jasper%20left.png'
    }    
});


fetch('./annunci.json').then( (response)=> response.json() ).then( (data)=> {
    data.sort( (a, b)=> a.price - b.price );
    
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');

    function radioCreate(){
        let categories = data.map( (annuncio)=> annuncio.category );

        let uniqueCategories = Array.from(new Set(categories));

        uniqueCategories.forEach( (category)=> {

            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="categories" id="${category}">
            <label class="form-check-label oswald-custom text-jasper" for="${category}">
                ${category}
            </label>
            `;
            radioWrapper.appendChild(div);
        })
        
        
    }

    radioCreate();

    function cutStrings(string){
        if (string.length > 15){
            return string.split(' ')[0] + '...';
        }else{
            return string;
        }
    }


    function showCards(array){
        cardWrapper.innerHTML = '';
        array.forEach( (annuncio, i)=>{
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
                <img src="https://picsum.photos/${300 + i}" alt="immagine casuale" class="img-fluid img-card">
                <p class="h3 text-jasper" title="${annuncio.name}">${cutStrings(annuncio.name)}</p>
                <p class="h6 roboto-mono- text-mintGreen">${annuncio.category}</p>
                <p class="h6 roboto-mono- text-jasper">${annuncio.price}€</p>
            `;
            cardWrapper.appendChild(div);
        })
    }

    showCards(data);


    function filterByCategory(categoria) {

        if (categoria != 'All') {
            
            let filtered = data.filter( (annuncio)=> annuncio.category == categoria);
            showCards(filtered);
        }else{
            showCards(data);
        }
        
    }


    let radioButtons = document.querySelectorAll('.form-check-input');

    radioButtons.forEach( (button)=> {
        button.addEventListener('click', ()=> {
            filterByCategory(button.id);
        })
    });

    let priceInput = document.querySelector('#priceInput');
    let priceValue = document.querySelector('#priceValue');

    function setPriceInput() {
        let prices = data.map( (annuncio)=> +annuncio.price );    
        // oppure Number(annuncio.price) al posto di +annuncio.price
        prices.sort( (a, b)=> a - b);
        let maxPrice = Math.ceil(prices.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.innerHTML = maxPrice;
        
        
    }
    setPriceInput();


    function filterByPrice() {
        let filtered = data.filter( (annuncio)=> Number(annuncio.price) <= priceInput.value );
        showCards(filtered);
    }

    priceInput.addEventListener( 'input', ()=> {
        priceValue.innerHTML = priceInput.value;
        filterByPrice();
    })


    let wordInput = document.querySelector('#wordInput');

    function filterByWord(parola) {
        let filtered = data.filter( (annuncio)=> annuncio.name.toLowerCase().includes(parola.toLowerCase()));
        showCards(filtered);
    }

    wordInput.addEventListener('input', ()=>{
        filterByWord(wordInput.value);
    })

});

