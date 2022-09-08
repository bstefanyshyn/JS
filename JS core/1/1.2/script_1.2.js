// Task 1
let person = {
    firstName: "Ivan",
    secondName: "Ivanov",
};
person.showData = function () { console.log(this.firstName, this.secondName); };
let newPerson = { ...person };
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
// person.showData();
newPerson.showData = function () { console.log(this.firstName, this.secondName); };
// newPerson.showData();



// Task 2
let MyMath = {};
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum = function () {
    let sumNumb = this.a + this.b;
    console.log(sumNumb);
};
MyMath.multiplication = function () {
    let multNumb = this.a * this.b;
    console.log(multNumb);
};
MyMath.division = function () {
    let divtNumb = this.a / this.b;
    console.log(divtNumb);
};
MyMath.subtraction = function () {
    let subNumb = this.a - this.b;
    console.log(subNumb);
};
// MyMath.sum();
// MyMath.multiplication();
// MyMath.division();
// MyMath.subtraction();