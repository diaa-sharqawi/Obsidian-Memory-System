# Graph Report - src  (2026-11-26)

## Corpus Check
- Corpus is ~1,666 words - fits in a single context window. You may not need a graph.

## Summary
- 49 nodes · 89 edges · 7 communities (3 shown, 4 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Tests and Stock Errors
- Pricing Rules
- Shopping Cart
- Calculator Core
- Order Checkout
- Inventory Stock
- Email Notifications

## God Nodes (most connected - your core abstractions)
1. `Cart` - 13 edges
2. `Calculator` - 10 edges
3. `Inventory` - 10 edges
4. `OrderService` - 10 edges
5. `applyDiscount()` - 7 edges
6. `addTax()` - 6 edges
7. `Shop demo architecture note` - 6 edges
8. `lineTotal()` - 4 edges
9. `OutOfStockError` - 3 edges
10. `Discount before tax design decision` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Stock reservation with rollback on out-of-stock` --conceptually_related_to--> `Inventory`  [EXTRACTED]
  ARCHITECTURE.md → inventory.js
- `Email on checkout and cancel` --conceptually_related_to--> `OrderService`  [EXTRACTED]
  ARCHITECTURE.md → orders.js
- `Calculator as base of all pricing` --rationale_for--> `Calculator`  [EXTRACTED]
  ARCHITECTURE.md → calculator.js
- `Shop demo architecture note` --references--> `Calculator`  [EXTRACTED]
  ARCHITECTURE.md → calculator.js
- `Shop demo architecture note` --references--> `Cart`  [EXTRACTED]
  ARCHITECTURE.md → cart.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Checkout flow** — cart_cart, orders_orderservice, inventory_inventory, pricing [EXTRACTED 0.85]

## Communities (7 total, 4 thin omitted)

### Community 0 - "Tests and Stock Errors"
Cohesion: 0.22
Nodes (5): assert, { describe, it, beforeEach }, OutOfStockError, assert, { describe, it, beforeEach }

### Community 1 - "Pricing Rules"
Cohesion: 0.36
Nodes (7): Discount before tax design decision, addTax(), applyDiscount(), calc, DISCOUNT_CODES, discountRate(), lineTotal()

### Community 4 - "Order Checkout"
Cohesion: 0.33
Nodes (3): Shop demo architecture note, Stock reservation with rollback on out-of-stock, OrderService

## Knowledge Gaps
- **1 isolated node(s):** `Calculator as base of all pricing`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 15 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Cart` connect `Shopping Cart` to `Tests and Stock Errors`, `Pricing Rules`, `Order Checkout`, `Inventory Stock`?**
  _High betweenness centrality (0.306) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `applyDiscount()` (e.g. with `Discount before tax design decision` and `pricing.js`) actually correct?**
  _`applyDiscount()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Calculator as base of all pricing` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Calculator` connect `Calculator Core` to `Tests and Stock Errors`, `Pricing Rules`, `Order Checkout`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **Why does `OrderService` connect `Order Checkout` to `Tests and Stock Errors`, `Shopping Cart`, `Inventory Stock`, `Email Notifications`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._