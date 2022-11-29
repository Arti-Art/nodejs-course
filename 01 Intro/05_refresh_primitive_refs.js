// Primitive Values VS Reference Values

// Primitive values: String, Number, Boolean, Undefined, Null >> Live on the STACK
// Reference values: Object, Array (type of object) >> Live on the HEAP

// When you assign an object to a variable for the first time, it gets an address on the heap where it lives, and the variable stores the pointer to that address
// If you assign the same object to another variable, you simply create a new pointer, but to the same address
// If you change properties of the object, stored in a first variable, and then console.log the second variable, you'll see the change ...
// ... because the variable does not store the value, but the pointer to the actual object in the HEAP

// link: https://www.youtube.com/watch?v=9ooYYRLdg_g
// article: https://academind.com/tutorials/reference-vs-primitive-values

// To simply copy an object,