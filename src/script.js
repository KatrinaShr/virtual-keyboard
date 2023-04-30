import letters from './letters.js';

let lang = 'en';

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

      for (let i = 0; i < element.length; i += 1) {
        const addKey = document.createElement('div');
        const addSpan = document.createElement('span');
        const lettersItem = element[i];
        addSpan.innerText = lettersItem.en;
        addKey.classList.add('key', lettersItem.className);

        addSpan.classList.add('en');
        const line = document.querySelectorAll('.line');

        line[index].append(addKey);
        addKey.appendChild(addSpan);

        const currentKey = document.querySelector(`.${lettersItem.className}`);
        currentKey.id = lettersItem.className;
        if (lettersItem.classNameSpecial) {
          addKey.classList.add(lettersItem.classNameSpecial);
        }
      }
    });
  }

  // function namingKey() {
    
  // }

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

initKeyboard();

const textarea = document.querySelector('textarea');
const key = document.querySelectorAll('.key');
// const keyBackspace = document.getElementById('Backspace');
// const keyTab = document.getElementById('Tab');
// const keyDelete = document.getElementById('Delete');
// const keyCapsLock = document.getElementById('CapsLock');
// const keyEnter = document.getElementById('Enter');
// const keyShiftLeft = document.getElementById('ShiftLeft');
// const keyShiftRight = document.getElementById('ShiftRight');
// const keyControlLeft = document.getElementById('ControlLeft');
// const keyControlRight = document.getElementById('ControlRight');
// const keyMetaLeft = document.getElementById('ControlRight');

// animate click key
document.addEventListener('keydown', (event) => {
  textarea.focus();
  if (document.querySelector(`.${event.code}`)) {
    // console.log(event.key);
    document.querySelector(`.${event.code}`).classList.add('active');
  }
});

document.addEventListener('keyup', (event) => {
  if (document.querySelector(`.${event.code}`)) {
    document.querySelector(`.${event.code}`).classList.remove('active');
  }
});

function removeLastChar() {
  let posStart = textarea.selectionStart;
  let posEnd = textarea.selectionEnd;
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
    let posStart = textarea.selectionStart;
    let posEnd = textarea.selectionEnd;
    if (posStart !== posEnd) {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd);
    } else {
      textarea.value = textarea.value.slice(0, posStart) + textarea.value.slice(posEnd + 1);
    }

    textarea.selectionStart = posStart;
    textarea.selectionEnd = posStart;
  }
}
// event mouse click
key.forEach((element) => {
  element.addEventListener('mousedown', function (event) {
    const code = this.getAttribute('id');
    if (code === 'Tab') {
      event.preventDefault();
    } else if (code === 'Backspace') {
      removeLastChar();
    } else if (code === 'Delete') {
      removeNextChar();
    }

    document.querySelector(`.${code}`).classList.add('active');
    if (!document.querySelector(`.${code}`).classList.contains('special-key')) {
      textarea.value += document.querySelector(`.${code} .en`).innerHTML;
    }
  });

  element.addEventListener('mouseup', function (event) {
    textarea.focus();
    const code = this.getAttribute('id');
    document.querySelector(`.${code}`).classList.remove('active');
  });
});

// window.addEventListener('click', (event) => console.log(event));
