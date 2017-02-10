var Student = (function () {
    function Student(firstName, middleIntial, lastName) {
        this.firstName = firstName;
        this.middleIntial = middleIntial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleIntial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
