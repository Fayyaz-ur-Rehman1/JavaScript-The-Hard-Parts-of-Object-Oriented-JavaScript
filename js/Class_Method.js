// Class_Method => any function we use in class that is called method any function use in class that is called method

class clsfn {
    constructor(fname, lname,) {
        this.fname = fname,
            this.lname = lname
        return fname + lname
    }
    // methods
    clsmethod(fname, lname) {
        this.fname = fname,
            this.lname = lname
        return fname + lname
    }
}

const clsmethodfn = new clsfn(20, 35);
console.log(clsmethodfn);
console.log(clsmethodfn.clsmethod("fayyaz", "urrehman"));


class clsfn2 {
    constructor(a, b) {
        this.freiendName = a,
            this.friendAge = b
        return this.freiendName + this.friendAge
    }
    clsmethod2(a, b) {
        this.brotherName = a,
            this.brotherAge = b
        return this.brotherName + this.brotherAge
    }
}
const callingclsfn = new clsfn2("adnan", 21);
console.log(callingclsfn);
console.log(callingclsfn.clsmethod2("hello ", "people"));


class PracticeCLsMethod {
    constructor(myName, myAge) {
        this.myName = myName,
            this.myAge = myAge
        return this.myName + this.myAge
    }
    clsmethod1(broName1, broAge1) {
        this.broName1 = broName1,
            this.broAge1 = broAge1
        return this.broName1 + this.broAge1
    }
    clsmethod2(broName2, broAge2) {
        this.broName2 = broName2,
            this.broAge2 = broAge2
        return this.broName2 + this.broAge2
    }
}
const callingPractice = new PracticeCLsMethod("Fayyazurrehman", 18);
console.log(callingPractice);
console.log(callingPractice.clsmethod1("danishChouhan", 19));
console.log(callingPractice.clsmethod2("navedChouhan", 17));
console.log(callingPractice);