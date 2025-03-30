import { reverseCharMap } from "./CharMap.mjs";

// Convert base-4 back to text
function base4ToWord(base4Array) {
    return base4Array
      .map((base4) => {
        if (base4 === "?") return "?";
        let decimal = base4ToDecimal(base4);
        return reverseCharMap.hasOwnProperty(decimal)
          ? reverseCharMap[decimal]
          : "?";
      })
      .join("");
  }
  
  // Convert base-4 to decimal
  function base4ToDecimal(base4String) {
    return base4String.split("").reduce((acc, digit, index, arr) => {
      return acc + parseInt(digit) * Math.pow(4, arr.length - 1 - index);
    }, 0);
  }
  
  // Decode function
  const Decode = (string, code) => {
    if (code === "decode") {
      const decoded = base4ToWord(string);
      return decoded;
    }
  }; 
  export default Decode