// // Object littrel

// const obj = {
//     name: 'fayyazurrehman',
//     age: 17,
//     study: '12th'
// }
// console.log(obj);

// // object update
// const objup = {
//     name: 'fayyazurrehman',
//     age: 17,
//     study: '12th'
// }
// console.log(objup.name = 'danishchouhan');
// console.log(objup);

// // Class 
// class fay {
//     constructor(fname, lname) {
//         this.fname = fname
//         this.lname = lname
//     }
// }
// const callingcls = new fay('fayyaz', 'urrehman');
// console.log(callingcls);

// //  Class method,
// class cls {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     friendName(name, age) {
//         this.name = name
//         this.age = age
//         return this
//     }
// }
// const callingcls2 = new cls('fayyazurrehman', 17);
// console.log(callingcls2);
// const calling = callingcls2.friendName('danishchouhan', 3)
// console.log(calling);

// // Method Chaning in class

// class methodchaning {
//     constructor(fname, lname) {
//         this.fname = fname
//         this.lname = lname
//         return this.fname + this.lname
//     }
//     fullage(age) {
//         this.age = age
//         return this
//     }
//     classname(study) {
//         this.study = study
//         return this
//     }
//     subname(sub) {
//         this.sub = sub
//         return this
//     }
// }
// const clscalling = new methodchaning('fayyaz', 'urrehman');
// const clscalling2 = clscalling.fullage(17).classname('12th').subname('commerce')
// console.log(clscalling2);

// // class inheritence
// class clsinheretence {
//     constructor(fname, lname) {
//         this.fname = fname
//         this.lname = lname
//         return this.fname + lname
//     }
// }
// class childclsinheretence extends clsinheretence { }
// class childchildclsinheretence extends childclsinheretence { }

// const clscalling5 = new clsinheretence('fayyaz', 'urrehman');
// const clscalling6 = new childclsinheretence('danish', 'chouhan');
// const clscalling7 = new childchildclsinheretence('adnan', 'khan')
// console.log(clscalling5);
// console.log(clscalling6);
// console.log(clscalling7);

// // Object prototype

// class clsproto {
//     constructor(fname, lname) {
//         this.fname = fname
//         this.lname = lname
//     }
// }
// clsproto.prototype.introduction = `i am good boy i am study in class 12th`
// const calling4 = new clsproto('fayyaz', 'urrehman')
// console.log(calling4);
// console.log(calling4.introduction);

// // Prototype inheretence
// const obj1 = {
//     name: 'fayyazurrehman',
//     age: 17,
//     cls: '12th',
//     sub: 'commerce'
// }
// const obj2 = {
//     name: 'danishchouhan',
//     age: 18,
//     cls: '12th',
//     sub: 'Arts',
//     __proto__: obj1
// }

// const obj3 = {
//     name: 'Adnanchouhan',
//     age: 20,
//     cls: '2 year',
//     sub: 'BCA',
//     __proto__: obj2
// }

// const obj4 = {
//     name: 'Sahlemjeed',
//     age: 22,
//     cls: 'Eduction Complete',
//     sub: 'Btach',
//     __proto__: obj3
// }
// console.log(obj4);

// // Getter and Setter 

// const objget = {
//     name: "fayyazurrehman",
//     age: 17,
//     get getname() {
//         return this.name.toLocaleUpperCase()
//     }
// }
// console.log(objget.getname);

// const objset = {
//     name: "fayyazurrehman",
//     age: 17,
//     set setname(n) {
//         this.name = n.toUpperCase()
//     }
// }
// objset.setname = "DanishChouhan"
// console.log(objset);


// // call method => jabbi apko dosre object ke method ko call krna hu ya use krna hu tab apn call method use me laige


const obj__1 = {
    name: "danish",
    age: 10,
    sum: function (friend) {
        console.log(`my name is ${this.name} i am ${this.age} year old and my best friend is ${friend}`);
    }
}

const obj__2 = {
    name: "fayyaz",
    age: 17,
}
obj__1.sum.call(obj__2,"danish chouhan","fayyaz");



// const obj__3 = {
//     name: "danish",
//     age: 10,
//     sum: function (friendfname,friendlname) {
//         console.log(`my name is ${this.name} i am ${this.age} year old and my best friend is ${friendfname} ${friendlname}`);
//     }
// }
// const obj__4 = {
//     name: "fayyaz",
//     age: 17,
// }
// obj__3.sum.apply(obj__4,["danish","chouhan"]);

// // bind => the bind method takes an object as an first argument and create a new function

// const obj__5 = {
//     name: "fayyaz",
//     age: 17,
//     sum: function () {
//         console.log(`my name is ${this.name} and i am ${this.age} year old`);
//     }
// }
// let obj__6 = obj__5.sum.bind(obj__5);
// obj__6()


// const obj__7 = {
//     name: "fayyaz",
//     age: 17,
// }
// const obj__8 = {
//     name: "danish",
//     age: 18,
// }
// const obj__9 = {
//     name: "adnan",
//     age: 20,
// }
// const obj__10 = {
//     name: "arbaz",
//     age: 16,
// }
// function sum(friend) {
//     console.log(`My name is ${this.name} and i am ${this.age} old all are my ${friend}`);
// }

// let main = sum.bind(obj__9);
// main("best friend")