const person = {
  name: 'Arti',
  age: 32,
  greet() {
    console.log('Hi, I\'m' + this.name)
  }
}

// Without Destructuring
const printName = (personData) => {
  console.log(personData.name)
}
printName(person);

// Object Destructuring
const printName2 = ({name}) => {
  console.log(name, '- this is a test')
}
printName2(person);

// Another way of destructuring
const { name, age } = person
console.log(name, age)

// Array Destructuring
const hobbies = ['Gardening', 'Cooking']
const [hobby1, hobby2] = hobbies
console.log(hobby1)