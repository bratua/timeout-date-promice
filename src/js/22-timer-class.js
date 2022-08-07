export default class Timer {
  constructor({ setTimerFn }) {
    this.ms = 0;
    this.delay = 1000;
    this.timerIsOn = false;
    this.timerId = null;
    this.setTimerFn = setTimerFn;
  }

  render() {
    this.setTimerFn(this.convertMs(this.timeMs));
    //  console.log('render', this);
  }

  get timeMs() {
    return this.ms;
  }

  set timeMs(ms) {
    this.ms = ms;
  }

  start() {
    console.log('start');
    this.timerIsOn = true;
    this.timerId = setInterval(() => {
      if (this.timeMs <= 0) {
        this.stop();
        return;
      }
      this.timeMs -= 1000;
      this.render();
    }, this.delay);
  }

  stop() {
    console.log('stop');
    this.timerIsOn = false;
    this.timeMs = 0;
    this.render();
    clearInterval(this.timerId);
  }

  pause() {
    console.log('pause');
    this.timerIsOn = false;
    this.render();
    clearInterval(this.timerId);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day); // Remaining days
    const hours = Math.floor((ms % day) / hour); // Remaining hours
    const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
    const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Remaining seconds

    return { days, hours, minutes, seconds };
  }
}
