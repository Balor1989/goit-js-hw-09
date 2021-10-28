import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
formForInputValues: document.querySelector('.form'),
inputValueOfFirstDelay: document.querySelector('[name="delay"]'),
inputValueOfDelayStep: document.querySelector('[name="step"]'),
inputValueOfAmount: document.querySelector('[name="amount"]'),
}

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
        return
      }
        reject({ position, delay })
    }, delay)
  })
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const referral = {
  delay: Number(refs.inputValueOfFirstDelay.value),
  delayStep: Number(refs.inputValueOfDelayStep.value),
  amount: Number(refs.inputValueOfAmount.value),
}

  for (let i = 1; i <= referral.amount; i += 1) {
    createPromise(i, referral.delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    referral.delay += referral.delayStep;
  }

  e.currentTarget.reset()
}

  refs.formForInputValues.addEventListener('submit', onFormSubmit)

