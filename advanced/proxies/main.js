let handler = {
  get: function (target, prop, receiver) {
    if (prop in target) {
      return target[prop];
    } else {
      return `La propriété ${prop} n'existe pas.`;
    }
  },
};

let person = { name: "John" };
let proxy = new Proxy(person, handler);

console.log(proxy.name); // "John"
console.log(proxy.age); // "La propriété age n'existe pas."
