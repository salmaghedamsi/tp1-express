const products = [
    { name: 'Keyboard', price: 45 },
    { name: 'Monitor', price: 320 },
    { name: 'Mouse', price: 25 }
];

// 1. Destructuring
const { name, price } = products[0];

console.log(name, price);

// 2. find
const item = products.find(
    product => product.name === "Mouse"
);

console.log(item.price);

// 3. filter
const filteredP = products.filter(
    product => product.price < 100
);

console.log(filteredP);

// 4. Arrow function withDiscount
const Discount = price => price * 0.9;

console.log(Discount(320));