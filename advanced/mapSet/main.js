const student = {
  firstName: "Monica",
  age: 20,
  adresse: "Paris",

  get Presentation() {
    return `Je m'appelle ${this.firstName} et j'ai ${this.age} ans, j'habite à ${this.adresse}.`;
  },
};

console.log(student.Presentation);
