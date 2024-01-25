
// classes inheritence

// class fay{
//     constructor(a,b,c){
//         this.FirstL = a
//         this.SecondL = b
//         this.fulname = c
//     }
// }
// class rampal extends fay{}
// class rajesh extends rampal{}

// const calling = new fay('Danish',"chouhan")
// const callingRampal = new rampal("Fayyaz Ur", "Rehman")
// const callingRajesh = new rajesh("Ha","bhai","mss")
// console.log(calling);
// console.log(callingRampal);
// console.log(callingRajesh);

class clsinhertence {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }
}
class childclsinhertece extends clsinhertence { }
class childchildclsinhertece extends childclsinhertece { }

const called = new clsinhertence('fayyaz', 'urrehman')
const calledchild = new childclsinhertece('danish', 'chouhan')
const calledchildchild = new childchildclsinhertece('adnan', 'khilji')
console.log(called);
console.log(calledchild);
console.log(calledchildchild);


class ClsInhertenceParent {
    constructor(fname, lname) {
        this.fname = fname,
            this.lname = lname
    }
}
class ClsInhertenceChild extends ClsInhertenceParent { }
class ClsInhertenceChildChild extends ClsInhertenceChild { }

const cllClassInheritanceparent = new ClsInhertenceParent("Fayyaz", "urrehman");
const cllClassInheritancechild = new ClsInhertenceChild("danish", "chouhan");
const cllClassInheritancechildchild = new ClsInhertenceChildChild("naved", "Chouhan");
console.log(cllClassInheritancechild);
console.log(cllClassInheritancechild);
console.log(cllClassInheritancechildchild);