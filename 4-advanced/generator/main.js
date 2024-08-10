function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
