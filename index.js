/* -------------------------------------------------------------------------- */
/*                                AФІННИЙ ШИФР                                */
/* -------------------------------------------------------------------------- */
function modInverse(a, m) {
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m == 1) {
      return x;
    }
  }
  return 1;
}

function affineEncrypt(plaintext, a, b) {
  let ciphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    let charCode = plaintext.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      ciphertext += String.fromCharCode(((a * (charCode - 65) + b) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      ciphertext += String.fromCharCode(((a * (charCode - 97) + b) % 26) + 97);
    } else {
      ciphertext += plaintext.charAt(i);
    }
  }
  return ciphertext;
}

function affineDecrypt(ciphertext, a, b) {
  let plaintext = "";
  let aInverse = modInverse(a, 26);
  for (let i = 0; i < ciphertext.length; i++) {
    let charCode = ciphertext.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      plaintext += String.fromCharCode(
        ((aInverse * (charCode - 65 - b + 26)) % 26) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      plaintext += String.fromCharCode(
        ((aInverse * (charCode - 97 - b + 26)) % 26) + 97
      );
    } else {
      plaintext += ciphertext.charAt(i);
    }
  }
  return plaintext;
}

let plaintext = "ATTACK AT DAWN";
let a = 3;
let b = 4;

let encryptedText = affineEncrypt(plaintext, a, b);
console.log("Encrypted: " + encryptedText);
let decryptedText = affineDecrypt(encryptedText, a, b);
console.log("Decrypted: " + decryptedText);
/* -------------------------------------------------------------------------- */
/*                          ПЕРЕСТАНОВКА ПО СТОВПЦЯХ                          */
/* -------------------------------------------------------------------------- */
function transpose(matrix) {
  return matrix[0]
    .map((col, i) => matrix.map((row) => row[i]))
    .filter((row) => row.length > 0);
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
  }
}

const matrix = [
  ["m", "e", "e", "t"],
  ["m", "e", "a", "t"],
  ["t", "h", "e", "p"],
  ["a", "r", "k"],
];

console.log("Початкова матриця:");
printMatrix(matrix);
const transposedMatrix = transpose(matrix);
console.log("\nМатриця після перестановки:");
printMatrix(transposedMatrix);
/* -------------------------------------------------------------------------- */
