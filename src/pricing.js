// pricing.js
// Price rules for the shop: line totals, discounts and tax. Built on Calculator.

const Calculator = require("./calculator");

const calc = new Calculator();
const TAX_RATE = 0.2;
const DISCOUNT_CODES = { WELCOME10: 0.1, VIP25: 0.25 };

// Total for one cart line: unit price x quantity.
function lineTotal(unitPrice, quantity) {
  return calc.multiply(unitPrice, quantity);
}

// Look up a discount code. Unknown codes give 0 (no discount).
function discountRate(code) {
  return DISCOUNT_CODES[code] ?? 0;
}

// Apply a discount code to a subtotal.
function applyDiscount(subtotal, code) {
  const discount = calc.multiply(subtotal, discountRate(code));
  return calc.subtract(subtotal, discount);
}

// Add tax to an amount.
function addTax(amount) {
  return calc.add(amount, calc.multiply(amount, TAX_RATE));
}

module.exports = { lineTotal, discountRate, applyDiscount, addTax };
