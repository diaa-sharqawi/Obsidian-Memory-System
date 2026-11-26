# Shop demo architecture

The shop is built from small modules. `Calculator` is the base: `pricing.js` uses it
for every price calculation, so a bug in `Calculator` changes every total.

- `Inventory` owns products and stock levels.
- `Cart` reads prices from `Inventory` and asks `pricing.js` for line totals, discounts and tax.
- `OrderService` turns a `Cart` into an order. It reserves stock in `Inventory`
  and rolls back if any line is out of stock. It sends an email on checkout and on cancel.

Design decision: discounts are applied before tax, because tax is charged on the price the customer pays.
