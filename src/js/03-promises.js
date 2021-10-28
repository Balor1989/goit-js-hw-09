import { Notify } from 'notiflix/build/notiflix-notify-aio';



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(position, delay);
  } else {
  reject (position, delay);
  }
}
const refs = {
form: document.querySelector('.form'),
firstDelay: document.querySelector('[name="delay"]'),
delayStep: document.querySelector('[name="step"]'),
amount: document.querySelector('[name="amount"]'),
createPromissesBtn: document.querySelector('[type="submit"]')
}


const onFormSubmit = (e) => {
  e.preventDefault();

  
  console.log(refs.firstDelay.value)
  console.log(refs.delayStep.value)
  console.log(refs.amount.value)

  e.currentTarget.reset()

 


}

refs.form.addEventListener('submit', onFormSubmit)

