let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;

console.log(target.test);
console.log(proxy.test);

for (let key in proxy) console.log(key);
