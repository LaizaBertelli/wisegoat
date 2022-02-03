const API_URL = 'https://api.adviceslip.com/advice';
const askAdviceButton = document.getElementById('ask-advice-btn');

async function handleClick() {
    const response = await fetch(API_URL);
    const { slip } = await response.json();
    console.log(slip.advice);
}

askAdviceButton.addEventListener('click', handleClick);
