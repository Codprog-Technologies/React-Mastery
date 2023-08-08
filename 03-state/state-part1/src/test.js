const person = {
    id: 1,
    firstName: "Harshit",
    lastName: "Vashistha",
    email: "harshitvashisth@gmail.com",
    phone: "9090909090",
    age: 24,
};

const newPerson = {
    ...person,
    age: 30,
};

console.log(newPerson);
