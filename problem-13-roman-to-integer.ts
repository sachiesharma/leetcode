function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentValue = romanMap[s[i]];
    let nextValue = romanMap[s[i + 1]];

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
}

console.log(romanToInt("III"));

// Notes
// Map out the roman numerals and their values
// there are seven different symbols: I:, V, X, L, C, D, M
// they are written largest to smallest, left to right
// Exception where subtraction is used: six exceptions

// If large value is written before smaller value, add
// If a smaller value appears before larger value, subtract
