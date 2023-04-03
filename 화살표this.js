const person = {
  naem: "chaejung",
  greet: () => {
    console.log(`hi, my name is ${this.name}`);
  },
};
person.greet();
