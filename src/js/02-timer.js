import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timerDays = document.querySelector(`span[data-days]`)
const timerHours = document.querySelector(`span[data-hours]`)
const timerMinutes = document.querySelector(`span[data-minutes]`)
const timerSeconds = document.querySelector(`span[data-seconds]`)
const input = document.querySelector(`input#datetime-picker`)
const startTimerButton = document.querySelector(`button[data-start]`)

startTimerButton.setAttribute(`disabled`, true)

const options = {
    time_24hr: true,
    enableTime: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            return Notify.failure(`Please choose a date in the future`);
        }
        startTimerButton.removeAttribute(`disabled`)
        startTimerButton.addEventListener(`click`, (() => {
            const timer = selectedDates[0].getTime()
        const startTimer = setInterval(() => {
        const deltaTime = timer - new Date()
        const time = convertMs(deltaTime)
        if (timer - new Date() > 0) {
            updateTime(time)
        } else {
            clearInterval(startTimer)
            return Notify.success('Time is up!');
        }   
    }, 1000) 
        }))  
    }
}

flatpickr(`input`, options)

function updateTime({ days, hours, minutes, seconds }) {
    timerDays.textContent = `${days}`;
    timerHours.textContent = `${hours}`;
    timerMinutes.textContent = `${minutes}`;
    timerSeconds.textContent = `${seconds}`
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, `0`);
}