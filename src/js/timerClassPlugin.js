import refs from './references.js';

export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  getTimerItems(time) {
    const pad = this.pad;
    const days = pad(Math.floor(time / 86400000));
    const hours = pad(Math.floor((time % 86400000) / 3600000));
    const mins = pad(Math.floor((time % 3600000) / 60000));
    const secs = pad(Math.floor((time % 60000) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  timerStart() {
    setInterval(() => {
      const time = this.targetDate.getTime() - Date.now();
      this.getTimerItems(time);
    }, 1000);
  }
}
