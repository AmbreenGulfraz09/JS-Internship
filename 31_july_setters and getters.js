// object accessors .. setters and getters
const student = {
    firstName: 'Monica',

    // accessor property (setter)
    set changeName(newName) {
        this.firstName = newName;
    },

    // accessor property (getter)
    get getName() {
        return this.firstName;
    }
};

console.log(student.firstName); // Monica

// change (set) object property using a setter
student.changeName = 'Sarah';

console.log(student.getName); // Sarah
