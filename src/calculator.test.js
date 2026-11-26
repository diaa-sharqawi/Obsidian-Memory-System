// calculator.test.js
// Unit tests using Node's built-in test runner (no libraries needed).
// Run with: node --test
//
// Layout: one section per method, each split into "normal cases" and "edge cases".
// Every test builds its own Calculator in beforeEach, so tests never share state.

const { describe, it, beforeEach } = require("node:test");
const assert = require("node:assert");
const Calculator = require("./calculator");

let calc;
beforeEach(() => {
  calc = new Calculator();
});

describe("add(a, b)", () => {
  describe("normal cases", () => {
    it("returns the sum of two positive integers", () => {
      assert.strictEqual(calc.add(5, 3), 8);
    });

    it("returns the sum of two negative integers", () => {
      assert.strictEqual(calc.add(-5, -3), -8);
    });

    it("returns the sum of a positive and a negative integer", () => {
      assert.strictEqual(calc.add(5, -3), 2);
    });

    it("returns the sum of two decimals", () => {
      assert.strictEqual(calc.add(0.5, 0.25), 0.75);
    });
  });

  describe("edge cases", () => {
    it("returns the other number when adding zero", () => {
      assert.strictEqual(calc.add(7, 0), 7);
    });

    it("returns zero when adding a number to its negative", () => {
      assert.strictEqual(calc.add(4, -4), 0);
    });
  });
});

describe("subtract(a, b)", () => {
  describe("normal cases", () => {
    it("returns the difference of two positive integers", () => {
      assert.strictEqual(calc.subtract(10, 4), 6);
    });

    it("returns a negative result when the second number is larger", () => {
      assert.strictEqual(calc.subtract(4, 10), -6);
    });

    it("returns the difference of two negative integers", () => {
      assert.strictEqual(calc.subtract(-5, -3), -2);
    });

    it("returns the difference of two decimals", () => {
      assert.strictEqual(calc.subtract(0.75, 0.25), 0.5);
    });
  });

  describe("edge cases", () => {
    it("returns the same number when subtracting zero", () => {
      assert.strictEqual(calc.subtract(7, 0), 7);
    });

    it("returns zero when subtracting a number from itself", () => {
      assert.strictEqual(calc.subtract(9, 9), 0);
    });
  });
});

describe("multiply(a, b)", () => {
  describe("normal cases", () => {
    it("returns the product of two positive integers", () => {
      assert.strictEqual(calc.multiply(6, 7), 42);
    });

    it("returns a positive product for two negative integers", () => {
      assert.strictEqual(calc.multiply(-3, -4), 12);
    });

    it("returns a negative product for a positive and a negative integer", () => {
      assert.strictEqual(calc.multiply(3, -4), -12);
    });

    it("returns the product of a decimal and an integer", () => {
      assert.strictEqual(calc.multiply(0.5, 4), 2);
    });
  });

  describe("edge cases", () => {
    it("returns zero when multiplying by zero", () => {
      assert.strictEqual(calc.multiply(6, 0), 0);
    });

    it("returns the same number when multiplying by one", () => {
      assert.strictEqual(calc.multiply(6, 1), 6);
    });
  });
});

describe("divide(a, b)", () => {
  describe("normal cases", () => {
    it("returns a whole number when the division is even", () => {
      assert.strictEqual(calc.divide(20, 5), 4);
    });

    it("returns a decimal when the division is not even", () => {
      assert.strictEqual(calc.divide(7, 2), 3.5);
    });

    it("returns a negative result when only one number is negative", () => {
      assert.strictEqual(calc.divide(-20, 5), -4);
    });
  });

  describe("edge cases", () => {
    it("returns zero when dividing zero by a non-zero number", () => {
      assert.strictEqual(calc.divide(0, 5), 0);
    });

    it("returns the same number when dividing by one", () => {
      assert.strictEqual(calc.divide(8, 1), 8);
    });

    it("throws a RangeError when dividing by zero", () => {
      assert.throws(() => calc.divide(10, 0), RangeError);
    });

    it("uses the message 'Cannot divide by zero' for division by zero", () => {
      assert.throws(() => calc.divide(10, 0), { message: "Cannot divide by zero" });
    });

    it("throws a TypeError, not a RangeError, when a non-number is divided by zero", () => {
      assert.throws(() => calc.divide("10", 0), TypeError);
    });
  });
});

describe("input validation (all methods)", () => {
  const methods = ["add", "subtract", "multiply", "divide"];
  const invalidValues = [
    ["a string", "5"],
    ["NaN", NaN],
    ["Infinity", Infinity],
    ["undefined", undefined],
    ["null", null],
    ["an object", {}],
    ["an array", [1]],
  ];

  for (const method of methods) {
    describe(method, () => {
      for (const [label, value] of invalidValues) {
        it(`throws a TypeError when the first argument is ${label}`, () => {
          assert.throws(() => calc[method](value, 1), TypeError);
        });

        it(`throws a TypeError when the second argument is ${label}`, () => {
          assert.throws(() => calc[method](1, value), TypeError);
        });
      }

      it("throws a TypeError when called with no arguments", () => {
        assert.throws(() => calc[method](), TypeError);
      });
    });
  }

  it("includes the rejected value in the error message", () => {
    assert.throws(() => calc.add("5", 1), { message: /5/ });
  });
});
