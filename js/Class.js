// class => class is a blue print of object
// constructer is a method of class every class haveonly one constructer method

class clsobj1 {
    constructor(fname, lname) {
        this.fname = fname,
            this.lname = lname
        return lname + fname
    }
}
const callingclsobj1 = new clsobj1("fayyaz", "urrehman")
console.log(callingclsobj1);
console.log(callingclsobj1.fname + callingclsobj1.lname);


class clsobj2 {
    constructor(name, age) {
        this.naam = name,
            this.sal = age
        return this.sal + this.naam
    }
}
const callingclsobj2 = new clsobj2("danishchouhan", 18);
const callingclsobj3 = new clsobj2("fayyazurrehman", 17);
console.log(callingclsobj2);
console.log(callingclsobj3);


class Practice {
    constructor(a, b) {
        this.a = a,
            this.b = b
        return this.a + this.b
    }
}
const callPractice1 = new Practice("fayyazurrehman", 18);
const callPractice2 = new Practice("danishChouhna", 19);
const callPractice3 = new Practice("Naved", 17);
const callPractice4 = new Practice("Amjad", 20);

console.log(callPractice1);
console.log(callPractice2);
console.log(callPractice3);
console.log(callPractice4);