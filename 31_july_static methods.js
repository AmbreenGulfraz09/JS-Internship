class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name);
    }

    walk() {
        alert("Animal " + this.name + " is walking");
    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}

j = new Animal("jack");
j.walk();

const capitalized = Animal.capitalize("ambreen");// only accessed by class itself
console.log(capitalized); // Output: "Ambreen"

