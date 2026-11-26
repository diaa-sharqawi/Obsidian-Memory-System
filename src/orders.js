// orders.js
// Turns a Cart into an Order: reserves stock, records the order, sends a notification.
// Also holds the notification helper, since checkout is its only caller.

class OrderService {
  #orders = [];

  constructor(inventory, notify = sendEmail) {
    this.inventory = inventory;
    this.notify = notify;
  }

  // Checkout: reserve every line, and roll back if any line fails.
  checkout(cart, customerEmail) {
    const reserved = [];
    try {
      for (const { sku, quantity } of cart.items()) {
        this.inventory.reserve(sku, quantity);
        reserved.push({ sku, quantity });
      }
    } catch (err) {
      for (const { sku, quantity } of reserved) this.inventory.release(sku, quantity);
      throw err;
    }
    const order = {
      id: this.#orders.length + 1,
      customerEmail,
      items: cart.items(),
      total: cart.total(),
      status: "paid",
    };
    this.#orders.push(order);
    this.notify(customerEmail, `Order #${order.id} confirmed: ${order.total.toFixed(2)}`);
    return order;
  }

  // Cancel an order and return its stock.
  cancel(orderId) {
    const order = this.#orders.find((o) => o.id === orderId);
    if (!order) throw new Error(`Unknown order: ${orderId}`);
    for (const { sku, quantity } of order.items) this.inventory.release(sku, quantity);
    order.status = "cancelled";
    this.notify(order.customerEmail, `Order #${order.id} cancelled`);
    return order;
  }
}

// Stand-in for a real email service.
function sendEmail(to, message) {
  console.log(`[email to ${to}] ${message}`);
}

module.exports = { OrderService, sendEmail };
