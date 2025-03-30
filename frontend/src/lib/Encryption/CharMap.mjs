let charMap = {};
let reverseCharMap = {};

// Generate character mappings dynamically (Better maintainability)
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:'\",./<>? ";
chars.split("").forEach((char, index) => {
  charMap[char] = index;
  reverseCharMap[index] = char;
});

export { charMap, reverseCharMap };
