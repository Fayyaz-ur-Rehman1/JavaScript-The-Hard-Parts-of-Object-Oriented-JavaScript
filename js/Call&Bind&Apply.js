// call method => jabbi apko dosre object ke method ko call krna hu ya use krna hu tab apn call method use me laige
// call method take argument seprately

const obj1 = {
    fname: "danish",
    lname: "chouhan",
    getName: function (fullname) {
        console.log(`my first name is ${this.fname} and my lastname is ${this.lname} and my fullname is ${fullname}`);
    }
}
const obj2 = {
    fname: "fayyaz",
    lname: "urrehman"
}
obj1.getName.call(obj2, 'fayyazurrehman');



// apply method =>jabbi apko dosre object ke method ko call krna hu ya use krna hu tab apn apply method use me laige
// // the apply method take agument as an array

const obj3 = {
    fname: "fayyaz",
    lname: "urrehman",
    getName: function (fullname) {
        console.log(`my first name is ${this.fname} my last name is ${this.lname} and my full name is ${fullname}`);
    }
}
const obj4 = {
    fname: "danish",
    lname: "chouhan"
}
obj3.getName.apply(obj4, ['danishChouhan'])


// bind method => bind method kisi object ko pahle agument ke rup me leta h or ek new function banata hai

const obj5 = {
    name: "fayyaz",
    age: 17,
    study: "12th",
    sub: "Commerce"
}
const obj6 = {
    name: "danish",
    age: 18,
    study: "12th",
    sub: "Arts"
}
const obj7 = {
    name: "adnan",
    age: 21,
    study: "2 year",
    sub: "BCA"
}
const obj8 = {
    name: "saif",
    age: 19,
    study: "1 year",
    sub: "Btach"
}

function allobjcall(country) {
    console.log(`my name is ${this.name} my age is ${this.age} years old i am study in class ${this.study} my subject is ${this.sub} i live in ${country}`);
}

let main = allobjcall.bind(obj7)
main('india')