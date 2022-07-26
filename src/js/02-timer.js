import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../css/common.css';

let timerId = null;
let actionTime = 0;
let timerIsOn = false;
const DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const futureDate = selectedDates[0].getTime();
    const currentDate = options.defaultDate.getTime();

    if (futureDate < currentDate) {
      window.alert('Please choose a date in the future');
      return;
    }

    actionTime = futureDate - currentDate;
    console.log('actionTime ', actionTime);
    console.log(convertMs(actionTime));
    setTimer(convertMs(actionTime));
  },
};

const ref = {
  inputDateField: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

ref.startBtn.addEventListener('click', onBtnClick);

flatpickr(ref.inputDateField, options);

function onBtnClick() {
  console.log('btn click');
  if (timerIsOn) {
    stopTimer();
    timerIsOn = false;
    return;
  }

  runTimer();
  timerIsOn = true;
}

function stopTimer() {
  clearInterval(timerId);
  setTimer(convertMs(actionTime));
}

function runTimer() {
  timerId = setInterval(decTime, DELAY);
}

function decTime() {
  actionTime -= 1000;

  if (actionTime <= 0) {
    stopTimer();
    actionTime = 0;
    setTimer(convertMs(actionTime));
    return;
  }

  setTimer(convertMs(actionTime));
  console.log('left ms ', actionTime);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function setTimer(timerData) {
  for (const key in timerData) {
    ref[key].textContent = timerData[key].toString().padStart(2, 0);
  }
}
