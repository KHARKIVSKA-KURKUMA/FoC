const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/* --------------------------------- Task 1 --------------------------------- */
function findCaesarKey(text, encryptedText) {
  const plainText = text.toUpperCase();
  const cipherText = encryptedText.toUpperCase();
  let key;
  for (let i = 0; i < 26; i++) {
    let decryptedText = "";
    for (let j = 0; j < cipherText.length; j++) {
      const encryptedIndex = alphabet.indexOf(cipherText[j]);
      const decryptedIndex = (encryptedIndex - i + 26) % 26;
      decryptedText += alphabet[decryptedIndex];
    }
    if (decryptedText === plainText) {
      key = i;
      break;
    }
  }
  return key;
}
/* --------------------------------- Task 2 --------------------------------- */
function caesarCipher(text, shift) {
  const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
  const cipherText = text.replace(/./g, (char) => {
    const index = alphabet.indexOf(char);
    return shiftedAlphabet[index];
  });
  return cipherText;
}

function decryptCaesarCipher(text, shift) {
  return caesarCipher(text, -shift);
}

function bruteForceCaesarCipher(text) {
  const plainText = text.toUpperCase();
  const possibleKeys = [];
  for (let i = 1; i < 26; i++) {
    const decryptedText = decryptCaesarCipher(plainText, i);
    possibleKeys.push({ key: i, text: decryptedText });
  }
  return possibleKeys;
}
/* -------------------------------------------------------------------------- */
const plainText = "Soldier";
const cipherText = "Bxumrna";
const key = findCaesarKey(plainText, cipherText);
console.log("Пара відкритий текст - шифротекст:", plainText, "-", cipherText);
console.log("Alphabet:", alphabet);
console.log("Ключ:", key);
/* -------------------------------------------------------------------------- */
const encryptedText = "Qhcqcudj";
console.log(`Всі можливі варіанти розшифровки ${encryptedText}:`);
const possibleKeys = bruteForceCaesarCipher(encryptedText);
console.log(possibleKeys);
