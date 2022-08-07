import Notiflix from 'notiflix';
import '../css/common.css';

const refs = {
  form: document.querySelector('.form'),
};

let timerId = null;

refs.form.addEventListener('submit', onSubmit);

// promiseGenerator({ delay: 1000, step: 1000, amount: 50 });
// console.log(refs.form);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    timerId = setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function promiseGenerator({ delay, step, amount }) {
  for (let position = 1; position <= amount; position += 1) {
    // console.log(position);
    // console.log(delay);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
    console.log(delay);
  }
}

function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget;

  promiseGenerator({
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  });

  e.currentTarget.reset();
  // clearTimeout(timerId);
  // console.log(delay.value, step.value, amount.value);
}

// createPromise(5, 500)
// .then(({ position, delay }) => {
//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(({ position, delay }) => {
//   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });
