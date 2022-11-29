
// The reason we write statements like this:
// button.addEventListener('click', this.addItem.bind(this));
/* 1) don't use parentheses on a function in an event listener
When we write a function, we define it first, and then call it with parentheses
If we use parentheses on a function (that has already been defined) it will execute rightaway, without waiting for the click event. Furthermore, it will not execute on click.
When we are writing a function name without parentheses (with the function already defined somewhere else), we are passing a REFERENCE.
A reference is like an address to "where to find the function". This allows us to call it again and again using the address.
2) In JS, the *this* keyword refers to the thing that called the function that is using the this. It refers to "whoever called the code in which *this* being used".
Usually, we use it to access methods/properties of classes/objects
But in this case (button.addEventListener...) it will be *button*, because the thing that called the addItem function was the eventListener of the button.
This is why we are using bind(). It is a JS method which you can call on functions/ methods. 
It allows you to bind *this* inside of the "to-be-executed function/ method" to any value of your choice.
In the above snippet, we bind *this* inside of addName to the same value *this* refers to in the constructor.
3) To avoid writing .bind(this), we can use modern ES6 arrow functions which solve the problem
*/


class NameField {
  constructor(name) {
      const field = document.createElement('li');
      field.textContent = name;
      const nameListHook = document.querySelector('#names');
      nameListHook.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
      this.names = ['Max', 'Manu', 'Anna'];
      this.currentName = 0;
      const btn = document.querySelector('button');
      btn.addEventListener('click', () => {
          this.addName();
      });
      // Alternative:
      // btn.addEventListener('click', this.addName.bind(this));
  }
  
  addName() {
      console.log(this);
      const name = new NameField(this.names[this.currentName]);
      this.currentName++;
      if (this.currentName >= this.names.length) {
          this.currentName = 0;
      }
  }
}

const gen = new NameGenerator();