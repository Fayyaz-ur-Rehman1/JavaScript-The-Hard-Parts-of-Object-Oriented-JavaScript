const objget = {
    name: "fayyazurrehman",
    age: 17,
    get getname() {
        return this.name.toLocaleUpperCase()
    }
}
console.log(objget.getname);

const objset = {
    name: "fayyazurrehman",
    age: 17,
    set setname(n) {
        this.name = n.toUpperCase()
    }
}
objset.setname = "DanishChouhan"
console.log(objset);