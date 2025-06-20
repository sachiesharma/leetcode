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
}

// Notes
// Map out the roman numerals and their values
// there are seven different symbols: I:, V, X, L, C, D, M
// they are written largest to smallest: with six exceptions
// If a smaller value appears before larger value, subtract
