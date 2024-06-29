// Defining an object with an array property
let person = {
  name: "divya",
  age: 21,
  hobbies: ["reading", "driving", "coding"],
};

// Accessing the array
console.log(person.hobbies); // Output: ["reading", "deiving", "coding"]

// Accessing an element of the array
console.log(person.hobbies[1]); // Output: "driving"

// Adding an element to the array
person.hobbies.push("traveling");
console.log(person.hobbies); // Output: ["reading", "deiving", "coding", "traveling"]

// Removing an element from the array
person.hobbies.splice(2, 1); // Removes the third element ("coding")
console.log(person.hobbies); // Output: ["reading", "driving", "traveling"]
