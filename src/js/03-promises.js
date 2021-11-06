// import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const form = document.querySelector(`.form`)
const submitBtn = document.querySelector(`button`)

form.addEventListener(`input`, checkForm)
submitBtn.addEventListener(`click`, submitFunc)


function checkForm() {
  const valueDelay = form.delay.value
  const valueStep = form.step.value
  const valueAmount = form.amount.value
  return {valueDelay, valueStep, valueAmount}
}

function submitFunc(ev) {
  ev.preventDefault()
  console.log(checkForm())
}