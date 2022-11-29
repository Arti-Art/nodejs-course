const person = {
  name: 'Arti',
  age: 32,
  greet() {
    console.log('Hi, I\'m' + this.name)
  }
}

const copiedPerson = {...person}
person.height = 180
console.log(person)
console.log(copiedPerson)

const hobbies = ['Gardening', 'Cooking']
const copiedArray = [...hobbies]
hobbies.push('whatever')
console.log(hobbies)
console.log(copiedArray)
// using const copiedArray = [hobbies] will create an array in an array


// Rest operator
const toArrayTest = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3] // will return an array of 3 arguments. What if we want 4?
}
// console.log(toArray('Simon', 'Puck', 'Dmitri')) // > this is not flexible: what if we want 4 arguments instead of 3?

// We can use the rest operator
// It's kind of like the opposite of the spread operator, instead of unpacking, it packs the arguments in an array
const toArray = (...args) => {
  return args
}

console.log(toArray('Simon', 'Puck', 'Dmitri'))

const toArrayAndModify = (...args) => {
  let modifiedArray = args.map(arg => `${arg} Smith`)
  return modifiedArray
}

console.log(toArrayAndModify('Simon', 'Puck', 'Dmitri'))