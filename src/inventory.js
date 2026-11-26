// inventory.js
// Tracks stock levels and product prices.

class OutOfStockError extends Error {}

class Inventory {
  #products = new Map();

  addProduct(sku, name, price, stock) {
    this.#products.set(sku, { sku, name, price, stock });
  }

  getProduct(sku) {
    const product = this.#products.get(sku);
    if (!product) throw new Error(`Unknown product: ${sku}`);
    return product;
  }

  // Remove stock for a sale. Throws OutOfStockError if there is not enough.
  reserve(sku, quantity) {
    const product = this.getProduct(sku);
    if (product.stock < quantity) {
      throw new OutOfStockError(`Only ${product.stock} of ${product.name} left`);
    }
    product.stock -= quantity;
  }

  // Put stock back, for example when an order is cancelled.
  release(sku, quantity) {
    this.getProduct(sku).stock += quantity;
  }
}

module.exports = { Inventory, OutOfStockError };
