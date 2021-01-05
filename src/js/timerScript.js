import CountdownTimer from './timerClassPlugin.js';

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

newTimer.timerStart();
