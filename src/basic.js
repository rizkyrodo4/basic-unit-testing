export function sumAndPlusTen(a, b) {
  return a + b + 10;
}

export function maxNum(a, b) {
  if ((typeof a !== "number") | (typeof b !== "number"))
    throw new Error("All of the arguments must be a number!");

  if (b > a) {
    return b;
  } else if (a > b) {
    return a;
  } else {
    return a;
  }
}

export function factorial(n) {
    if (n < 0) throw new Error("Number must be a positive integer!");
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(171));
  