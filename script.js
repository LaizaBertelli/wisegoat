const ADVICE_API_URL = 'https://api.adviceslip.com/advice';
const ANIMAL_API_URL = 'https://dog.ceo/api/breeds/image/random';
const askAdviceButton = document.getElementById('ask-advice-btn');

function removeMainPageElements() {
    const header = document.querySelector('.header');
    header.removeChild(askAdviceButton);
    
    const main = document.querySelector('main');
    main.classList.remove('home');
    main.classList.add('advice');

    const imgContainer = document.querySelector('.home-image-container');
    const goatImg = document.querySelector('.goat-image');
    imgContainer.removeChild(goatImg);
    imgContainer.classList.add('advice-container')
    
}

function appendAdvice(advice) {
    const advContainer = document.querySelector('.advice-container');
    const p = document.createElement('p');
    p.innerText = '"' + advice + '"';
    p.classList.add('advice-text');
    advContainer.appendChild(p);
}

function appendImage(imageURL) {
    const container = document.querySelector('.advice-container');
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.setAttribute('src', imageURL);
    section.appendChild(img);
    container.appendChild(section);
}

async function fetchAnimalImage() {
    const animalResponse = await fetch(ANIMAL_API_URL);
    const { message } = await animalResponse.json();
    appendImage(message);
}

async function handleClick() {
    removeMainPageElements();
    const response = await fetch(ADVICE_API_URL);
    const { slip } = await response.json();
    console.log(slip)
    console.log(slip.advice);
    
    appendAdvice(slip.advice);
    fetchAnimalImage();
}

askAdviceButton.addEventListener('click', handleClick);
