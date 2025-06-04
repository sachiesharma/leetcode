function createCounter(n: number): () => number {
  let count = n;
  return function () {
    let currentCount = count;
    count++;
    return currentCount;

    // store current value
    // increment counter
    // return value from step 1
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
