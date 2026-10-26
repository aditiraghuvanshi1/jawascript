// Capstone: Interactive Product Inventory & Analytics Dashboard
// Run in a browser console / HTML page (uses prompt()).

console.log("--- Initializing Inventory System ---");

// ---------- 1. Data & Input Initialization ----------
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse",  price: 25  }
];

// ---------- 2. Control flow: validation + category badge ----------
function getCategory(price) {
  // switch(true) lets us use range conditions
  switch (true) {
    case price < 50:  return "Budget";
    case price < 500: return "Standard";
    default:          return "Premium";
  }
}

function isValidProduct(name, price) {
  if (!name || name.trim() === "") return false;
  if (isNaN(price) || price <= 0)   return false;
  return true;
}

// ---------- 3. Loops with break/continue: handle bad input ----------
const MAX_ATTEMPTS = 3;
for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  const rawName  = prompt("Enter new product name:", "Monitor");
  if (rawName === null) {                     // user pressed Cancel
    console.log("Input cancelled. Continuing with existing inventory.");
    break;
  }
  const rawPrice = prompt("Enter product price:", "150");
  if (rawPrice === null) {
    console.log("Input cancelled. Continuing with existing inventory.");
    break;
  }

  const name  = rawName.trim();
  const price = Number(rawPrice);             // explicit conversion

  if (!isValidProduct(name, price)) {
    console.log(`Invalid input (attempt ${attempt}/${MAX_ATTEMPTS}). Try again.`);
    continue;                                  // skip to next attempt
  }

  inventory.push({ name, price });
  console.log(`[Prompt executed: User adds "${name}" at "$${price}"]`);
  break;                                       // valid input -> stop asking
}

// Add category badges
inventory.forEach(item => { item.category = getCategory(item.price); });

// ---------- 4. Functions & scope ----------
function calculateTotal(items) {
  let total = 0;                               // local, protected scope
  for (const item of items) total += item.price;
  return total;
}

const applyTax      = (amount, ratePercent = 0) => amount + (amount * ratePercent) / 100;
const applyDiscount = (amount, ratePercent = 0) => amount - (amount * ratePercent) / 100;

// ---------- 5. Array methods ----------
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item =>
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`)
);

console.log("--- Financial Analytics ---");
const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordable = inventory.filter(item => item.price < 200).map(item => item.name);
console.log("Filtered Affordable Items (Under $200):", affordable);

const report = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log("Formatted Report List:", report);

// Bonus: tax/discount examples
console.log(`Total with 18% tax: $${applyTax(totalValue, 18)}`);
console.log(`Total with 10% discount: $${applyDiscount(totalValue, 10)}`);
