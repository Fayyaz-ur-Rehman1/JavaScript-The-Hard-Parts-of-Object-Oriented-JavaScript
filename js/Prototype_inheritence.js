// Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.

const obj1 = {
    name: "fayyazkhilji",
    getName: function () {
        return this.name
    },
    getroll: function () {
        return this.roll
    }
};
const obj2 = {
    age: 17,
    __proto__: obj1
};
const obj3 = {
    study: '12th',
    roll: 15,
    __proto__: obj2
}
const obj4 = {
    name: "fayyazurrehman",
    __proto__: obj3
}
console.log(obj4.getName());

const obj5 = {
    roll: 11,
    __proto__: obj4
}
console.log(obj5.getroll());

// -------------

// function Myprototype(name,roll) {
//     this.name = name
//     this.roll = roll
// }
// Myprototype.prototype = obj5
// const valueproto = new Myprototype("fayyazurrehman","11");
// console.log(valueproto.roll);