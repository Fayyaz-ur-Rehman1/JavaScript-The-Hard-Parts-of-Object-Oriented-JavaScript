// object litterals

// const object = {
//     name: 'Fayyaz',
//     lname: "ur rehman"
// }
// console.log(object.lname);

// updating Propertis

// object.name = "Danish"

// console.log(object.name);


// // classes

// class fay{
//     constructor(a,b){
//         this.FirstL = a
//         this.SecondL = b
//         this.FirstL + this.SecondL
//     }
// }

// const calling = new fay(10,20)
// console.log(typeof calling);

// a blue printof object is a class
// constructer is a method of class every class haveonly one constructer method

// class methods 


// class fay {
//     constructor(a, b) {
//         this.FirstL = a
//         this.SecondL = b
//         return this.FirstL + this.SecondL
//     }
//     // methods 
//     dan(a, b) {
//         this.name = a
//         this.lname = b
//         return a + b
//     }
// }

// const calling = new fay(10, 20)
// console.log(calling);
// console.log(calling.dan("Danish", "chouhan"));


// method chaining



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

// const calling = new fay(10,20)

// const chain = calling.fname("Danish").lname("chouhan").fullname("Danish chouhan");
// console.log(chain);


// method chaining is a technice where we make our readadbility good becouse all methods are sequensely added to one object


// class prototype 

// class fay{
//     constructor(a){
//         this.name = a
//         return this.name
//     }
// }
// fay.prototype.Blessing = function(){
//     return `Hello ${this.name} how are you`
// }
// const calling = new fay("Fayyaz ur rehman")
// console.log(calling);
// console.log(calling.Blessing());

// prototype is a hidden storage where we can store some methods or functionality becouse prototype chaining will see the object forst andthen they will find


// BigO = worst case 
// omega = best case
// thitha = avg case

// class prototype

