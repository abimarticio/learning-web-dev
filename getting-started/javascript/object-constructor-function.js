// object constructor function, a way to create an object type
function Student(firstName, lastName, age) {
    this.firstName = firstName; // this keyword refers to the owner of the function
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

const student1 = new Student("Clarke", "Griffin", 17);
const student2 = new Student("Bellamy", "Blake", 23);
const student3 = new Student("Raven", "Reyes", 18);

console.log(student1); // output all parameters of student1 
console.log(student1.firstName); // output student1 first name
console.log(student2.fullName()); // output student2 full name

//enumerates all the members in an object, use "for in loop"
for (let key in student1) {
    if(typeof student1[key] !== "function")
    console.log(key, student1[key]);
}

//to get all the keys in an object, use "Object.keys"
const keys = Object.keys(student1);
    console.log(keys);

//to check for the existence of a property or method in an object, use "in operator"
if("firstName" in student1) {
    console.log("Student has a first name.");
}