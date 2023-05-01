import letters from './letters.js';

const langList = ['en', 'ru'];
let lang = 'en';
const variantsImgKey = 'caseDown';

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

          addSpanContainer.classList.add(`${langList[y]}`);
          addSpanCaseDown.innerText = lettersItem[langList[y]];
          addSpanCaseDown.classList.add('caseDown');

          addSpanCaseUp.innerText = lettersItem[`caseUp${langList[y][0].toUpperCase() + langList[y].slice(1)}`];
          addSpanCaseUp.classList.add('caseUp');

          addSpanCaps.innerText = addSpanCaseDown.innerText.toUpperCase();
          addSpanCaps.classList.add('caps');

          addSpanShiftCaps.innerText = addSpanCaseUp.innerText.toLowerCase();
          addSpanShiftCaps.classList.add('shiftCaps');

          addKey.appendChild(addSpanContainer);
          addSpanContainer.appendChild(addSpanCaseDown);
          addSpanContainer.appendChild(addSpanCaseUp);
          addSpanContainer.appendChild(addSpanCaps);
          addSpanContainer.appendChild(addSpanShiftCaps);
        }

        if (lettersItem.classNameSpecial) {
          addKey.classList.add(lettersItem.classNameSpecial);
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
  addlanguage.innerHTML = 'To switch the language combination: <strong> left shift + alt</strong>.';
  document.querySelector('section').append(addlanguage);
}

function showNamesKey(event) {
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

key.forEach((element) => {
  element.addEventListener('mousedown', function (event) {
    processingKey.call(this);
  });

  element.addEventListener('mouseup', (event) => {
    textarea.focus();
  });
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  processingKey.call(document.querySelector(`.${event.code}`));
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
});

// processing press key
function removeLastChar() {
  const posStart = textarea.selectionStart;
  const posEnd = textarea.selectionEnd;
  if (textarea.value) {
    if (posStart !== posEnd) {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd);
    } else {
      textarea.value = textarea.value.slice(0, -1);
    }
  }
}

function removeNextChar() {
  if (textarea.value) {
    const posStart = textarea.selectionStart;
    const posEnd = textarea.selectionEnd;
    if (posStart !== posEnd) {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd);
    } else {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd + 1);
    }

    textarea.selectionStart = posStart;
    textarea.selectionEnd = posStart;
  }
}

function processingKey() {
  const code = this.getAttribute('id');
  const keyDownDiv = document.querySelector(`.${code}`);
  const keyDown = document.querySelector(`.${code} .${lang} .${variantsImgKey}`);

  if (!keyDownDiv.classList.contains('active')) {
    keyDownDiv.classList.add('active');
  }

  textarea.focus();

  if (code === 'Backspace') {
    removeLastChar();
  } else if (code === 'Delete') {
    removeNextChar();
  }

  if (!document.querySelector(`.${code}`).classList.contains('special-key')) {
    textarea.value += keyDown.innerHTML;
  }

  setTimeout(() => {
    if (keyDownDiv.classList.contains('active')) {
      keyDownDiv.classList.remove('active');
    }
  }, 300);
}

// window.addEventListener('click', (event) => console.log(event));
