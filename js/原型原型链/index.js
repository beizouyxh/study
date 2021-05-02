function Person() {
    
}
const person = new Person();
console.log(person.__proto__ === Person.prototype); //true
console.log(Person.__proto__ === Person.constructor.prototype)  //true
console.log(Object.getPrototypeOf(person));  //Person{}
console.log(Object.prototype.__proto__)