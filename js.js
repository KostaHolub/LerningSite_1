const name = "Andrew";

const person = {
  name: "Julia",
  sayHi: () => {
    return `Hello ${this.name}!`;
  },
};

console.log(person.sayHi());
