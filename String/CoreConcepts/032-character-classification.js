const ch = '    ';

const chIsLetter = /[a-zA-Z]/.test(ch);
const chIsDigit = /[0-9]/.test(ch);
const chIsWhitespace = /[\s]/.test(ch);

if(chIsLetter) {
    console.log(`Character: '${ch}' is a letter`);
} else if(chIsDigit) {
    console.log(`Character: '${ch}' is a digit`);
} else if(chIsWhitespace) {
    console.log(`Character: '${ch}' is a whitespace`);
} else {
    console.log(`Character: '${ch}' is a special character`);
}