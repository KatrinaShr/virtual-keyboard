const lineEn = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'], ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift'], ['Ctrl', 'Win', 'Alt', '', 'Alt', '', '', '', 'Ctrl']];
const lineRu = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'], ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift'], ['Ctrl', 'Win', 'Alt', '', 'Alt', '', '', '', 'Ctrl']];

function createKeyboard() {
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
        addKey.classList.add('key', `digit${index}_${i}`);
        addSpan.classList.add('En');

        addSpan.innerText = element[i];
        const line = document.querySelectorAll('.line');

        line[index].append(addKey);
        addKey.appendChild(addSpan);
      }
    });
  }

  generateKey(lineEn);
  const addDescription = document.createElement('p');
  addDescription.classList.add('description');
  addDescription.innerHTML = 'Keyboard created in the <strong> Windows </strong> operating system.';
  document.querySelector('section').append(addDescription);

  const addlanguage = document.createElement('p');
  addlanguage.classList.add('language');
  addlanguage.innerHTML = 'To switch the language combination: <strong> left shift + alt</strong>.';
  document.querySelector('section').append(addlanguage);
}

createKeyboard();
