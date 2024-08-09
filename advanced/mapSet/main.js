let map = new Map();
map.set("name", "Alice");
map.set("age", 25);

console.log(map.get("name")); // "Alice"
console.log(map.has("age")); // true

let set = new Set([1, 2, 3, 4, 4]);
console.log(set.has(3));
console.log(set.size);
