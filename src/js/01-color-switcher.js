function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector(`button[data-start]`)
const stopButton = document.querySelector(`button[data-stop]`)
const background = document.querySelector(`body`)

let timerId = null

stopButton.setAttribute(`disabled`, true)

startButton.addEventListener(`click`, onChangeBacgroundColor)
stopButton.addEventListener(`click`, stopChangeBackgroundColor)

function onChangeBacgroundColor() {
    stopButton.removeAttribute(`disabled`)
    timerId = setInterval(() => {
       background.style.backgroundColor = getRandomHexColor() 
    }, 1000,)
    startButton.setAttribute(`disabled`, true)
}

function stopChangeBackgroundColor() {
    clearInterval(timerId);
    stopButton.setAttribute(`disabled`, true)
    startButton.removeAttribute(`disabled`)
}