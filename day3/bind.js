const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
