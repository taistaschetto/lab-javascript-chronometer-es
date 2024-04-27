class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    let startTime = Date.now();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      this.currentTime = elapsedTime;
      if (callback) {
        callback();
      }
    }, 1);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 60000) / 1000);
  }

  getMilliseconds() {
    return Math.floor(this.currentTime % 1000 /10)
  }
  computeTwoDigitNumber(value) {
    return `${value}`.padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    document.getElementById('minDec').innerHTML = '00';
    document.getElementById('minUni').innerHTML = '00';

    document.getElementById('secDec').innerHTML = '00';
    document.getElementById('secUni').innerHTML = '00';

    document.getElementById('milDec').innerHTML = '00';
    document.getElementById('milUni').innerHTML = '00';
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`; 
  }
  // split() {
  //   const minutes = this.computeTwoDigitNumber(this.getMinutes());
  //   const seconds = this.computeTwoDigitNumber(this.getSeconds());
  //   const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
  //   return `${minutes}:${seconds}:${milliseconds}`;
  // }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
