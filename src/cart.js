// cart.js
// A shopping cart. Reads prices from Inventory and totals them with pricing rules.

const { lineTotal, applyDiscount, addTax } = require("./pricing");

class Cart {
  #items = new Map(); // sku -> quantity

  constructor(inventory) {
    this.inventory = inventory;
    this.discountCode = null;
  }

  add(sku, quantity = 1) {
    this.inventory.getProduct(sku); // throws if unknown
    this.#items.set(sku, (this.#items.get(sku) ?? 0) + quantity);
  }

  remove(sku) {
    this.#items.delete(sku);
  }

  items() {
    return [...this.#items].map(([sku, quantity]) => ({ sku, quantity }));
  }

  applyCode(code) {
    this.discountCode = code;
  }

  subtotal() {
    let total = 0;
    for (const { sku, quantity } of this.items()) {
      total += lineTotal(this.inventory.getProduct(sku).price, quantity);
    }
    return total;
  }

  // Final price: discount first, then tax.
  total() {
    return addTax(applyDiscount(this.subtotal(), this.discountCode));
  }
}

module.exports = Cart;
