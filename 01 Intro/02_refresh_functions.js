const myName = 'Arti'
const myAge = 29
const myHobbies = ['Baseball', 'Voleyball', 'Getting high in the morning', 'Buying things off the internet']

function summarizeUser(userName, userAge, userHobbies) {
  return `${userName} is ${userAge} years old, and loves ${userHobbies}`
  // NB: This is a pure function > does not depend on anything outside the function
}
console.log(summarizeUser(myName, myAge, myHobbies))

// Let's rewrite the function above as an arrow function
const summarizeUser2 = (userName, userAge, userHobbies) => {
  return `${userName} is ${userAge} years YOUNG, and REALLY loves ${userHobbies}`
}
console.log(summarizeUser2(myName, myAge, myHobbies))
// to understand the usefulness of arrow functions (esp. for the 'this' keyword), read the following link+video: https://academind.com/tutorials/this-keyword-function-references

// Let's make it even shorter! If I have a function with only ONE statement that happens to be the RETURN statement, I can omit the curly braces and the return keyword. If I have only 1 argument, I can omit parentheses around the arguments too
const summarizeUser3 = (userName, userAge, userHobbies) => `The guy named ${userName} is ${userAge}, and wants to do ${userHobbies}`
console.log(summarizeUser3(myName, myAge, myHobbies))