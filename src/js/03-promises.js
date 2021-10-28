import { Notify } from 'notiflix/build/notiflix-notify-aio';



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  }
}
const firstDelay = document.querySelector('[name="delay"]')
const delayStep = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const createPromissesBtn = document.querySelector('[type="submit"]')

createPromissesBtn.addEventListener('click', createPromise)