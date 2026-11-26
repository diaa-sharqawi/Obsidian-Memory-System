// calculator.js
// A simple Calculator class using ES6 class syntax. No external libraries.

class Calculator {
  // Check that both inputs are real numbers (not strings, NaN, or Infinity).
  // Throws an error with a clear message if not.
  #validate(a, b) {
    for (const value of [a, b]) {
      if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new TypeError(`Invalid input: ${String(value)} is not a finite number`);
      }
    }
  }

  // Addition: returns a + b
  add(a, b) {
    this.#validate(a, b);
    return a + b;
  }

  // Subtraction: returns a - b
  subtract(a, b) {
    this.#validate(a, b);
    return a - b;
  }

  // Multiplication: returns a * b
  multiply(a, b) {
    this.#validate(a, b);
    return a * b;
  }

  // Division: returns a / b. Dividing by zero is not allowed.
  divide(a, b) {
    this.#validate(a, b);
    if (b === 0) {
      throw new RangeError("Cannot divide by zero");
    }
    return a / b;
  }
}

module.exports = Calculator;
