import letters from './letters.js';

// window.addEventListener('keydown', (event) => console.log(event));
const langList = ['en', 'ru'];
let lang = 'en';
let variantsImgKey = 'caseDown';

// save names in local storage
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage);
// display of saved data
function getLocalStorage() {
  if (localStorage.getItem('lang')) { lang = localStorage.getItem('lang'); }
}

window.addEventListener('load', getLocalStorage);

function initKeyboard() {
  const addMain = document.createElement('main');
  const addSection = document.createElement('section');
  const addH1 = document.createElement('h1');
  const addTextArea = document.createElement('textArea');
  const addContainer = document.createElement('div');

  addMain.classList.add('main');
  document.body.append(addMain);

  addSection.classList.add('container');
  addMain.append(addSection);

  addH1.classList.add('title');
  addH1.innerHTML = 'Virtual Keyboard';
  addSection.append(addH1);

  addTextArea.classList.add('textarea');
  addSection.append(addTextArea);

  addContainer.classList.add('keyboard');
  addContainer.id = 'keyboard';
  addSection.append(addContainer);
  const keyboard = document.querySelector('.keyboard');

  function generateKey(arr) {
    arr.forEach((element, index) => {
      const addLine = document.createElement('div');
      addLine.classList.add('line');
      keyboard.appendChild(addLine);
      const line = document.querySelectorAll('.line');

      for (let i = 0; i < element.length; i += 1) {
        const addKey = document.createElement('div');
        const lettersItem = element[i];
        line[index].append(addKey);
        addKey.classList.add('key', lettersItem.className);

        const currentKey = document.querySelector(`.${lettersItem.className}`);
        currentKey.id = lettersItem.className;
        for (let y = 0; y < langList.length; y += 1) {
          const addSpanContainer = document.createElement('span');
          const addSpanCaseDown = document.createElement('span');
          const addSpanCaseUp = document.createElement('span');
          const addSpanCaps = document.createElement('span');
          const addSpanShiftCaps = document.createElement('span');

          if (lettersItem.classNameSpecial) {
            addKey.classList.add(lettersItem.classNameSpecial);
          }

          addSpanContainer.classList.add(`${langList[y]}`);
          addSpanCaseDown.innerText = lettersItem[langList[y]];
          addSpanCaseDown.classList.add('caseDown');

          addSpanCaseUp.innerText = lettersItem[`caseUp${langList[y][0].toUpperCase() + langList[y].slice(1)}`];
          addSpanCaseUp.classList.add('caseUp');

          addSpanCaps.innerText = addKey.classList.contains('special-key') ? addSpanCaseDown.innerText : addSpanCaseDown.innerText.toUpperCase();
          addSpanCaps.classList.add('caps');

          addSpanShiftCaps.innerText = addSpanCaseUp.innerText.toLowerCase();
          addSpanShiftCaps.classList.add('shiftCaps');

          addKey.appendChild(addSpanContainer);
          addSpanContainer.appendChild(addSpanCaseDown);
          addSpanContainer.appendChild(addSpanCaseUp);
          addSpanContainer.appendChild(addSpanCaps);
          addSpanContainer.appendChild(addSpanShiftCaps);
        }
      }
    });
  }

  generateKey(letters);
  const addDescription = document.createElement('p');
  addDescription.classList.add('description');
  addDescription.innerHTML = 'Keyboard created in the <strong> Windows </strong> operating system.';
  document.querySelector('section').append(addDescription);

  const addlanguage = document.createElement('p');
  addlanguage.classList.add('language');
  addlanguage.innerHTML = 'To switch the language combination: <strong> left ctrl + alt</strong>.';
  document.querySelector('section').append(addlanguage);
}

function showNamesKey() {
  const enItems = document.querySelectorAll('.en');
  const ruItems = document.querySelectorAll('.ru');
  const caseDown = document.querySelectorAll(`.${lang} .caseDown`);
  const caseUp = document.querySelectorAll(`.${lang} .caseUp`);
  const caseCaps = document.querySelectorAll(`.${lang} .caps`);
  const caseShiftCaps = document.querySelectorAll(`.${lang} .shiftCaps`);

  function caseDefinition() {
    if (variantsImgKey === 'caseDown') {
      caseDown.forEach((elem) => {
        if (elem.classList.contains('hidden')) {
          elem.classList.remove('hidden');
        }
      });

      [...caseUp, ...caseCaps, ...caseShiftCaps].forEach((elem) => {
        elem.classList.add('hidden');
      });
    } else if (variantsImgKey === 'caseUp') {
      caseUp.forEach((elem) => {
        if (elem.classList.contains('hidden')) {
          elem.classList.remove('hidden');
        }
      });

      [...caseDown, ...caseCaps, ...caseShiftCaps].forEach((elem) => {
        elem.classList.add('hidden');
      });
    } else if (variantsImgKey === 'caps') {
      caseCaps.forEach((elem) => {
        if (elem.classList.contains('hidden')) {
          elem.classList.remove('hidden');
        }
      });

      [...caseDown, ...caseUp, ...caseShiftCaps].forEach((elem) => {
        elem.classList.add('hidden');
      });
    } else if (variantsImgKey === 'shiftCaps') {
      caseShiftCaps.forEach((elem) => {
        if (elem.classList.contains('hidden')) {
          elem.classList.remove('hidden');
        }
      });

      [...caseDown, ...caseUp, ...caseCaps].forEach((elem) => {
        elem.classList.add('hidden');
      });
    }
  }

  if (lang === 'en') {
    ruItems.forEach((elem) => elem.classList.add('hidden'));
    enItems.forEach((elem) => {
      if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
      }
    });
  } else if (lang === 'ru') {
    enItems.forEach((elem) => elem.classList.add('hidden'));
    ruItems.forEach((elem) => {
      if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
      }
    });
  }
  caseDefinition();
}

initKeyboard();
showNamesKey();

const textarea = document.querySelector('textarea');
const key = document.querySelectorAll('.key');

// processing press key
function operationBackspace(posStart, posEnd) {
  if (textarea.value) {
    if (posStart !== posEnd) {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd);
      textarea.selectionStart = posStart;
      textarea.selectionEnd = posStart;
    } else {
      textarea.value = textarea.value.slice(0, posStart - 1) + textarea.value.slice(posEnd);
      textarea.selectionStart = posStart - 1;
      textarea.selectionEnd = posStart - 1;
    }
  }
}

function operationDelete(posStart, posEnd) {
  if (textarea.value) {
    if (posStart !== posEnd) {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd);
    } else {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd + 1);
    }

    textarea.selectionStart = posStart;
    textarea.selectionEnd = posStart;
  }
}

function operationEnter(posStart, posEnd) {
  if (textarea.value) {
    if (posStart !== posEnd) {
      textarea.value = `${textarea.value.slice(0, posStart)}\r\n${textarea.value.slice(posEnd)}`;
    } else {
      textarea.value = `${textarea.value.slice(0, posStart)}\r\n${textarea.value.slice(posStart)}`;
    }

    textarea.selectionStart = posStart + 1;
    textarea.selectionEnd = posStart + 1;
  }
}

function operationSpace(posStart, posEnd) {
  if (textarea.value) {
    if (posStart !== posEnd) {
      textarea.value = `${textarea.value.slice(0, posStart)} ${textarea.value.slice(posEnd)}`;
    } else {
      textarea.value = `${textarea.value.slice(0, posStart)} ${textarea.value.slice(posStart)}`;
    }
    textarea.selectionStart = `${posStart + 1}`;
    textarea.selectionEnd = `${posStart + 1}`;
  }
}

function operationTab(posStart, posEnd) {
  if (textarea.value) {
    if (posStart !== posEnd) {
      textarea.value = `${textarea.value.slice(0, posStart)}\u0009${textarea.value.slice(posEnd)}`;
    } else {
      textarea.value = `${textarea.value.slice(0, posStart)}\u0009${textarea.value.slice(posStart)}`;
    }
    textarea.selectionStart = posStart + 1;
    textarea.selectionEnd = posStart + 1;
  }
}

function operationUpDownLeftRight(code, posStart, posEnd) {
  if (code === 'ArrowUp') { textarea.value = `${textarea.value.slice(0, posStart)}\u25B2${textarea.value.slice(posStart)}`; }
  if (code === 'ArrowDown') { textarea.value = `${textarea.value.slice(0, posStart)}\u25BC${textarea.value.slice(posStart)}`; }
  if (code === 'ArrowLeft') { textarea.value = `${textarea.value.slice(0, posStart)}\u25C0${textarea.value.slice(posStart)}`; }
  if (code === 'ArrowRight') { textarea.value = `${textarea.value.slice(0, posStart)}\u25B6${textarea.value.slice(posStart)}`; }
  textarea.selectionStart = posStart + 1;
  textarea.selectionEnd = posStart + 1;
}

function processingKey() {
  const posStart = textarea.selectionStart;
  const posEnd = textarea.selectionEnd;
  let arr = [];

  const code = this.getAttribute('id');
  const keyDownDiv = document.querySelector(`.${code}`);
  const keyDown = document.querySelector(`.${code} .${lang} .${variantsImgKey}`);

  textarea.focus();

  if (code === 'Backspace') {
    operationBackspace(posStart, posEnd);
  } else if (code === 'Delete') {
    operationDelete(posStart, posEnd);
  } else if (code === 'Enter') {
    operationEnter(posStart, posEnd);
  } else if (code === 'Space') {
    operationSpace(posStart, posEnd);
  } else if (code === 'Tab') {
    operationTab(posStart, posEnd);
  } else if (code === 'ArrowUp' || code === 'ArrowDown' || code === 'ArrowLeft' || code === 'ArrowRight') {
    operationUpDownLeftRight(code, posStart, posEnd);
  } else if (code === 'CapsLock') {
    if (variantsImgKey === 'caps') {
      variantsImgKey = 'caseDown';
    } else {
      variantsImgKey = 'caps';
    }
    showNamesKey();
  }

  if (!document.querySelector(`.${code}`).classList.contains('special-key')) {
    textarea.value += keyDown.innerHTML;
  }
}

key.forEach((element) => {
  element.addEventListener('mousedown', function (event) {
    const code = event.currentTarget.getAttribute('id');
    if (code === 'CapsLock') { document.getElementById(`${code}`).classList.toggle('active'); }
    else { document.getElementById(`${code}`).classList.add('active'); }
    processingKey.call(this);
  });

  element.addEventListener('mouseup', (event) => {
    const code = event.currentTarget.getAttribute('id');
    if (code !== 'CapsLock') {
      document.getElementById(`${code}`).classList.remove('active');
    }
    textarea.focus();
  });
});

const pressed = new Set();
const changeLang = ['ControlLeft', 'AltLeft'];
const changeCaseUp = ['Shift'];

document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') { document.querySelector(`.${event.code}`).classList.toggle('active'); }
  else { document.querySelector(`.${event.code}`).classList.add('active'); }

  pressed.add(event.code);

  for (let key of changeLang) {
    if (!pressed.has(key)) {
      return;
    }
  }

  pressed.clear();

  if (lang === 'en') {
    lang = 'ru';
  } else { lang = 'en'; }

  showNamesKey();
  event.preventDefault();
  processingKey.call(document.querySelector(`.${event.code}`));
});

document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') {
    document.querySelector(`.${event.code}`).classList.remove('active');
  }
  pressed.delete(event.code);
  event.preventDefault();
});
