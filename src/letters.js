const letters = [
  [{
    en: '`', ru: 'ё', caseUpEn: '~', caseUpRu: 'Ё', className: 'Backquote',
  },
  {
    en: '1', ru: '1', caseUpEn: '!', caseUpRu: '!', className: 'Digit1',
  },
  {
    en: '2', ru: '2', caseUpEn: '@', caseUpRu: '"', className: 'Digit2',
  },
  {
    en: '3', ru: '3', caseUpEn: '#', caseUpRu: '№', className: 'Digit3',
  },
  {
    en: '4', ru: '4', caseUpEn: '$', caseUpRu: ';', className: 'Digit4',
  },
  {
    en: '5', ru: '5', caseUpEn: '%', caseUpRu: '%', className: 'Digit5',
  },
  {
    en: '6', ru: '6', caseUpEn: '^', caseUpRu: ':', className: 'Digit6',
  },
  {
    en: '7', ru: '7', caseUpEn: '&', caseUpRu: '?', className: 'Digit7',
  },
  {
    en: '8', ru: '8', caseUpEn: '*', caseUpRu: '*', className: 'Digit8',
  },
  {
    en: '9', ru: '9', caseUpEn: '(', caseUpRu: '(', className: 'Digit9',
  },
  {
    en: '0', ru: '0', caseUpEn: ')', caseUpRu: ')', className: 'Digit0',
  },
  {
    en: '-', ru: '-', caseUpEn: '_', caseUpRu: '_', className: 'Minus',
  },
  {
    en: '=', ru: '=', caseUpEn: '+', caseUpRu: '+', className: 'Equal',
  },
  {
    en: 'Backspace', ru: 'Backspace', caseUpEn: 'Backspace', caseUpRu: 'Backspace', className: 'Backspace', classNameSpecial: 'special-key',
  }],

  [{
    en: 'Tab', ru: 'Tab', caseUpEn: 'Tab', caseUpRu: 'Tab', className: 'Tab', classNameSpecial: 'special-key',
  },
  {
    en: 'q', ru: 'й', caseUpEn: 'Q', caseUpRu: 'Й', className: 'KeyQ',
  },
  {
    en: 'w', ru: 'ц', caseUpEn: 'W', caseUpRu: 'Ц', className: 'KeyW',
  },
  {
    en: 'e', ru: 'у', caseUpEn: 'E', caseUpRu: 'У', className: 'KeyE',
  },
  {
    en: 'r', ru: 'к', caseUpEn: 'R', caseUpRu: 'К', className: 'KeyR',
  },
  {
    en: 't', ru: 'е', caseUpEn: 'T', caseUpRu: 'Е', className: 'KeyT',
  },
  {
    en: 'y', ru: 'н', caseUpEn: 'Y', caseUpRu: 'Н', className: 'KeyY',
  },
  {
    en: 'u', ru: 'г', caseUpEn: 'U', caseUpRu: 'Г', className: 'KeyU',
  },
  {
    en: 'i', ru: 'ш', caseUpEn: 'I', caseUpRu: 'Ш', className: 'KeyI',
  },
  {
    en: 'o', ru: 'щ', caseUpEn: 'O', caseUpRu: 'Щ', className: 'KeyO',
  },
  {
    en: 'p', ru: 'з', caseUpEn: 'P', caseUpRu: 'З', className: 'KeyP',
  },
  {
    en: '[', ru: 'х', caseUpEn: '{', caseUpRu: 'Х', className: 'BracketLeft',
  },
  {
    en: ']', ru: 'ъ', caseUpEn: '}', caseUpRu: 'Ъ', className: 'BracketRight',
  },
  {
    en: '\\', ru: '\\', caseUpEn: '|', caseUpRu: '/', className: 'Backslash',
  },
  {
    en: 'Del', ru: 'Del', caseUpEn: 'Del', caseUpRu: 'Del', className: 'Delete', classNameSpecial: 'special-key',
  }],

  [{
    en: 'CapsLock', ru: 'CapsLock', caseUpEn: 'CapsLock', caseUpRu: 'CapsLock', className: 'CapsLock', classNameSpecial: 'special-key',
  },
  {
    en: 'a', ru: 'ф', caseUpEn: 'A', caseUpRu: 'Ф', className: 'KeyA',
  },
  {
    en: 's', ru: 'ы', caseUpEn: 'S', caseUpRu: 'Ы', className: 'KeyS',
  },
  {
    en: 'd', ru: 'в', caseUpEn: 'D', caseUpRu: 'В', className: 'KeyD',
  },
  {
    en: 'f', ru: 'а', caseUpEn: 'F', caseUpRu: 'А', className: 'KeyF',
  },
  {
    en: 'g', ru: 'п', caseUpEn: 'G', caseUpRu: 'П', className: 'KeyG',
  },
  {
    en: 'h', ru: 'р', caseUpEn: 'H', caseUpRu: 'Р', className: 'KeyH',
  },
  {
    en: 'j', ru: 'о', caseUpEn: 'J', caseUpRu: 'О', className: 'KeyJ',
  },
  {
    en: 'k', ru: 'л', caseUpEn: 'K', caseUpRu: 'Л', className: 'KeyK',
  },
  {
    en: 'l', ru: 'д', caseUpEn: 'L', caseUpRu: 'Д', className: 'KeyL',
  },
  {
    en: ';', ru: 'ж', caseUpEn: ':', caseUpRu: 'Ж', className: 'Semicolon',
  },
  {
    en: "'", ru: 'э', caseUpEn: '"', caseUpRu: 'Э', className: 'Quote',
  },
  {
    en: 'Enter', ru: 'Enter', caseUpEn: 'Enter', caseUpRu: 'Enter', className: 'Enter', classNameSpecial: 'special-key',
  }],

  [{
    en: 'Shift', ru: 'Shift', caseUpEn: 'Shift', caseUpRu: 'Shift', className: 'ShiftLeft', classNameSpecial: 'special-key',
  },
  {
    en: 'z', ru: 'я', caseUpEn: 'Z', caseUpRu: 'Я', className: 'KeyZ',
  },
  {
    en: 'x', ru: 'ч', caseUpEn: 'X', caseUpRu: 'Ч', className: 'KeyX',
  },
  {
    en: 'c', ru: 'с', caseUpEn: 'C', caseUpRu: 'С', className: 'KeyC',
  },
  {
    en: 'v', ru: 'м', caseUpEn: 'V', caseUpRu: 'М', className: 'KeyV',
  },
  {
    en: 'b', ru: 'и', caseUpEn: 'B', caseUpRu: 'И', className: 'KeyB',
  },
  {
    en: 'n', ru: 'т', caseUpEn: 'N', caseUpRu: 'Т', className: 'KeyN',
  },
  {
    en: 'm', ru: 'ь', caseUpEn: 'M', caseUpRu: 'Ь', className: 'KeyM',
  },
  {
    en: ',', ru: 'б', caseUpEn: '<', caseUpRu: 'Б', className: 'Comma',
  },
  {
    en: '.', ru: 'ю', caseUpEn: '>', caseUpRu: 'Ю', className: 'Period',
  },
  {
    en: '/', ru: '.', caseUpEn: '?', caseUpRu: ',', className: 'Slash',
  },
  {
    en: '', ru: '', caseUpEn: '', caseUpRu: '', className: 'ArrowUp', classNameSpecial: 'special-key',
  },
  {
    en: 'Shift', ru: 'Shift', caseUpEn: 'Shift', caseUpRu: 'Shift', className: 'ShiftRight', classNameSpecial: 'special-key',
  }],

  [{
    en: 'Ctrl', ru: 'Ctrl', caseUpEn: 'Ctrl', caseUpRu: 'Ctrl', className: 'ControlLeft', classNameSpecial: 'special-key',
  },
  {
    en: 'Win', ru: 'Win', caseUpEn: 'Win', caseUpRu: 'Win', className: 'MetaLeft', classNameSpecial: 'special-key',
  },
  {
    en: 'Alt', ru: 'Alt', caseUpEn: 'Alt', caseUpRu: 'Alt', className: 'AltLeft', classNameSpecial: 'special-key',
  },
  {
    en: '', ru: '', caseUpEn: '', caseUpRu: '', className: 'Space',
  },
  {
    en: 'Alt', ru: 'Alt', caseUpEn: 'Alt', caseUpRu: 'Alt', className: 'AltRight', classNameSpecial: 'special-key',
  },
  {
    en: '', ru: '', caseUpEn: '', caseUpRu: '', className: 'ArrowLeft', classNameSpecial: 'special-key',
  },
  {
    en: '', ru: '', caseUpEn: '', caseUpRu: '', className: 'ArrowDown', classNameSpecial: 'special-key',
  },
  {
    en: '', ru: '', caseUpEn: '', caseUpRu: '', className: 'ArrowRight', classNameSpecial: 'special-key',
  },
  {
    en: 'Ctrl', ru: 'Ctrl', caseUpEn: 'Ctrl', caseUpRu: 'Ctrl', className: 'ControlRight', classNameSpecial: 'special-key',
  }],
];
export default letters;
