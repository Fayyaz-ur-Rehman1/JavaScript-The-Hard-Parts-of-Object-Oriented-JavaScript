
class fay{
    constructor(a){
        this.name = a
        return this.name
    }
}

fay.prototype.Blessing = `Hello danish how are you`
const calling = new fay("Fayyaz ur rehman")
console.log(calling);
console.log(calling.Blessing);


// get and set


// class andsand{
//     constructor(age){
//         this.age = age
//     }

//     get fay(){
//         console.log("get");
//         return this.age + 1001
//     }
//     set fay(name){ 
//         console.log("set");
//      return this.age = name
//     }
// }
// const obj = new andsand(17)
// obj.fay = "Danish";
// console.log(obj.fay);
// console.log(obj);