const person = {
  name: 'Arti',
  age: 32,
  greet() {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old.`)
  }
  // NB: if we write greet: () => {}, we can't use this in it, because in an arrow function, the scope is the global runtime
  // or we can write greet: function() {functionBody where I use ${this.name}}, this will work too
}

// console.log(person)
// console.log(person.age)
// person.greet()

const hobbies = ['Biking', 'Gardening']
for (let hobby of hobbies) {
  console.log(hobby)
}
console.log(hobbies.map(hobby => `Hobby: ${hobby}`)) // map returns a new array
console.log(hobbies) // the old array stays unchanged

// Read this article to avoid errors manipulating arrays : https://academind.com/tutorials/reference-vs-primitive-values