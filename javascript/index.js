const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.getMilliseconds();
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(milliseconds)[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(milliseconds)[1];
}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.className = 'list-item';
  newSplit.innerHTML = chronometer.split();
  splitsElement.appendChild(newSplit);
}

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
  }
});

function clearSplits() {
  splitsElement.innerHTML = '';
}

btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.reset();
    minDecElement.innerHTML = '0';
    minUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    secUniElement.innerHTML = '0';

    clearSplits();
  }
});
