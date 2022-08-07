import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import '../css/common.css';
import Timer from './22-timer-class.js';

const ref = {
  inputDateField: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  pauseBtn: document.querySelector('button[data-pause]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timerId = null;
let actionTime = 0;
let timerIsOn = false;
const DELAY = 1000;
let testTimer = null;
const BTN_STATE = {
  start: 'Start count',
  stop: 'Stop count',
};

ref.startBtn.addEventListener('click', onBtnStartClick);
ref.pauseBtn.addEventListener('click', onBtnPauseClick);
ref.startBtn.textContent = BTN_STATE.start;

const timer = new Timer({ setTimerFn: setTimer });

//! flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const futureDate = selectedDates[0].getTime();
    const currentDate = options.defaultDate.getTime();

    if (futureDate < currentDate) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    actionTime = futureDate - currentDate;
    timer.timeMs = actionTime;
    timer.render();
    // testTimer = new Timer(actionTime);
    // testTimer.renderTimer();
    // console.log('actionTime ', actionTime);
    // console.log(convertMs(actionTime));
    // setTimer(convertMs(actionTime));
  },
};
flatpickr(ref.inputDateField, options);
//! flatpickr

function onBtnStartClick() {
  if (timer.timerIsOn) {
    timer.stop();
    ref.startBtn.textContent = BTN_STATE.start;
    return;
  }
  timer.start();
  ref.startBtn.textContent = BTN_STATE.stop;
}

function onBtnPauseClick() {
  if (timer.timerIsOn) {
    timer.pause();
    ref.startBtn.textContent = BTN_STATE.start;
    return;
  }
  timer.start();
  ref.startBtn.textContent = BTN_STATE.stop;
}

function setTimer(timerData) {
  for (const key in timerData) {
    ref[key].textContent = timerData[key].toString().padStart(2, 0);
  }
}

// function onBtnClick() {
//   if (timerIsOn) {
//     stopTimer();

//     return;
//   }

//   runTimer();
// }

// function stopTimer() {
//   ref.startBtn.textContent = BTN_STATE.start;
//   clearInterval(timerId);
//   timerIsOn = false;
//   setTimer(convertMs(actionTime));
// }

// function runTimer() {
//   ref.startBtn.textContent = BTN_STATE.stop;
//   timerId = setInterval(decTime, DELAY);
//   timerIsOn = true;
// }

// function decTime() {
//   actionTime -= 1000;

//   if (actionTime <= 0) {
//     stopTimer();
//     actionTime = 0;
//     setTimer(convertMs(actionTime));
//     return;
//   }

//   setTimer(convertMs(actionTime));
//   // console.log('left ms ', actionTime);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day); // Remaining days
//   const hours = Math.floor((ms % day) / hour); // Remaining hours
//   const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Remaining seconds

//   return { days, hours, minutes, seconds };
// }
