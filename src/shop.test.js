// shop.test.js
// End-to-end checks for the shop: inventory, cart, pricing and orders together.
// Run with: node --test

const { describe, it, beforeEach } = require("node:test");
const assert = require("node:assert");
const { Inventory, OutOfStockError } = require("./inventory");
const Cart = require("./cart");
const { OrderService } = require("./orders");

let inventory, cart, sent, orders;
beforeEach(() => {
  inventory = new Inventory();
  inventory.addProduct("KB", "Keyboard", 50, 5);
  cart = new Cart(inventory);
  sent = [];
  orders = new OrderService(inventory, (to, msg) => sent.push({ to, msg }));
});

describe("Cart", () => {
  it("totals with discount then tax", () => {
    cart.add("KB", 2);
    cart.applyCode("WELCOME10");
    assert.strictEqual(cart.total(), 108); // 100 - 10% = 90, + 20% tax
  });
});

describe("OrderService", () => {
  it("reserves stock and notifies the customer", () => {
    cart.add("KB", 2);
    const order = orders.checkout(cart, "a@b.com");
    assert.strictEqual(inventory.getProduct("KB").stock, 3);
    assert.strictEqual(order.status, "paid");
    assert.strictEqual(sent.length, 1);
  });

  it("rejects an order when stock is too low", () => {
    cart.add("KB", 9);
    assert.throws(() => orders.checkout(cart, "a@b.com"), OutOfStockError);
    assert.strictEqual(inventory.getProduct("KB").stock, 5);
  });

  it("cancel returns stock", () => {
    cart.add("KB", 2);
    const order = orders.checkout(cart, "a@b.com");
    orders.cancel(order.id);
    assert.strictEqual(inventory.getProduct("KB").stock, 5);
  });
});
