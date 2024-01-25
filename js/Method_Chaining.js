// method chaining is a technice where we make our readadbility good becouse all methods are sequensely added to one object

// class fay{
//     constructor(a,b){
//         this.FirstL = a
//         this.SecondL = b
//     }
//     fname(a){
//         this.names = a
//         return this
//     }
//     lname(b){
//         this.lnames = b
//         return this
//     }
//     fullname(c){
//         this.fullnames = c
//         return this
//     }
// }

class MethodChaining {
    constructor(a, b) {
        this.fnameValue = a; // Changed property name to fnameValue
        this.lnameValue = b; // Changed property name to lnameValue
    }

    fname(a) {
        this.fnameValue = a; // Changed property name to fnameValue
        return this;
    }

    lname(b) {
        this.lnameValue = b; // Changed property name to lnameValue
        return this;
    }

    fullname(c) {
        this.fullName = c;
        return this;
    }
}

const calling = new MethodChaining(10, 20);

const chain = calling.fname("fayyaz").lname("urrehman").fullname("fayyazurrehman");
console.log(chain);


// class methodchaing {
//     constructor(a, b) {
//         this.Firstname = a
//         this.Lastname = b
//     }

//     fname(a) {
//         this.fName = a
//         return this
//     }
//     lname(b) {
//         this.lName = b
//         return this
//     }
//     fullname(c) {
//         this.fullName = c
//         return this
//     }
// }
// // const calling = new methodchaing(10, 20);

// // const chain = calling.fname("fayyaz").lname("urrehman").fullname("fayyazurrehman")
// // console.log(chain);

// // const calling = new fay(10,20)

// // const chain = calling.fname("Danish").lname("chouhan").fullname("Danish chouhan");
// // console.log(chain);

// // const calling = new fay(10,20)

// // const chain = calling.fname("Danish").lname("chouhan").fullname("Danish chouhan");
// // console.log(chain);

// class clsfnmethod{
//     constructor(fname , lname){
//         this.fname = fname,
//         this.lname = lname
//     }
//     name(a){
//         this.myName = a
//         return this
//     }
//     age(b){
//         this.myAge = b
//         return this
//     }
//      study(c){
//         this.mystudy = c
//         return this
//      }
// }
// const clsfnmethodchain = new clsfnmethod("fayyaz","urrehman");
// const chaining = clsfnmethodchain.name("fayyazurrehman").age(17).study("12th");
// console.log(chaining);

class MethodChainingcls {
    constructor(a,b){
        this.name = a,
        this.age = b
    }
    MethodChaining1(a){
     this.fullName = a
     return this
    }
    MethodChaining2(a,b){
        this.broName = a,
        this.broAge = b
         return this
    }
    MethodChaining3(a,b){
        this.broName2 = a,
        this.broAge2 = b
        return this
    }
}
const callMethodChaining = new MethodChainingcls("fayyaz"  , 18);
console.log(callMethodChaining.MethodChaining1("fayyazurrehman").MethodChaining2("danishchouhan",19).MethodChaining3("navedchouhna",17));
console.log(callMethodChaining);