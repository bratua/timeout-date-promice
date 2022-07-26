import storage from './storage.js';
import '../css/common.css';

const ref = {
  allBtn: document.querySelectorAll('.button-of-changes'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  toggleBtn: document.querySelector('button[data-toggle]'),
  hexColorOutput: document.querySelector('.hex-color-output'),
  body: document.querySelector('body'),
};

console.log(ref.allBtn);

const TIMER_INTERVAL = 1000;
const START_BTN_TEXT = 'RUN the big color changes 😎';
const STOP_BTN_TEXT = 'STOP the big color changes 😢';
const START_BTN_KEY = 'startBtnName';
const STOP_BTN_KEY = 'stopBtnName';
const BLOCKED_BTN = 'BUTTON IS BLOCKED !!!';
let timerId = null;
let isOn = false;

ref.startBtn.addEventListener('click', onStartButtonClick);
ref.stopBtn.addEventListener('click', onStopButtonClick);
ref.toggleBtn.addEventListener('click', onToggleButtonClick);
ref.toggleBtn.textContent = START_BTN_TEXT;

function onToggleButtonClick() {
  if (!isOn) {
    onStartButtonClick();
    ref.startBtn.disabled = true;
    ref.stopBtn.disabled = true;

    ref.startBtn.textContent = BLOCKED_BTN;
    ref.stopBtn.textContent = BLOCKED_BTN;
    return;
  }

  onStopButtonClick();
  ref.startBtn.disabled = false;
  ref.stopBtn.disabled = false;
  ref.startBtn.textContent = storage.load(START_BTN_KEY);
  ref.stopBtn.textContent = storage.load(STOP_BTN_KEY);
  localStorage.clear();
}

function onStartButtonClick() {
  if (timerId) {
    return;
  }
  ref.toggleBtn.textContent = STOP_BTN_TEXT;
  isOn = true;
  timerId = setInterval(paint, TIMER_INTERVAL);
  storage.save(START_BTN_KEY, ref.startBtn.textContent);
  storage.save(STOP_BTN_KEY, ref.stopBtn.textContent);
}

function onStopButtonClick() {
  clearInterval(timerId);
  timerId = null;
  isOn = false;
  ref.toggleBtn.textContent = START_BTN_TEXT;
}

function randomHexColor() {
  return (Math.random() * 16999999999).toString(16).slice(1, 3);
}

function paint() {
  let hexColor = `#${randomHexColor()}${randomHexColor()}${randomHexColor()}`;
  ref.allBtn.forEach(btn => (btn.style.backgroundColor = hexColor));
  ref.hexColorOutput.style.color = hexColor;
  ref.hexColorOutput.textContent = `Цвет настроения ${hexColor} :)`;
}
