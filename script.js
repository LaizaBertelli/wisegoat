const API_URL = 'https://api.adviceslip.com/advice';
const askAdviceButton = document.getElementById('ask-advice-btn');

function removeMainPageElements() {
    const header = document.querySelector('.header');
    header.removeChild(askAdviceButton);
    
    const main = document.querySelector('main');
    main.classList.remove('home');
    main.classList.add('advice');

    const imgContainer = document.querySelector('.image-container');
    const goatImg = document.querySelector('.goat-image');
    imgContainer.removeChild(goatImg);
    
}

async function handleClick() {
    removeMainPageElements();
    const response = await fetch(API_URL);
    const { slip } = await response.json();
    console.log(slip.advice);
}

askAdviceButton.addEventListener('click', handleClick);
