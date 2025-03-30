 import { charMap} from "./CharMap.mjs"
// Convert word to base-4 encoding
function wordToBase4(word) {
  return word.split("").map((char) => {
    return charMap.hasOwnProperty(char) ? decimalToBase4(charMap[char]) : "?";
  });
}

// Convert decimal to base-4
function decimalToBase4(decimal) {
  if (decimal === 0) return "0";
  let base4 = "";
  while (decimal > 0) {
    base4 = (decimal % 4) + base4;
    decimal = Math.floor(decimal / 4);
  }
  return base4;
}

// Hash function
const HashBase4 = (string, code) => {
  if (code === "4") {
    return wordToBase4(string);
  }
};
 
export default HashBase4;
