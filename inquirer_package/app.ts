import inquirer from 'inquirer';
// inquirer allows the user to take input in the console runtime

let answer = await inquirer.prompt([{
    name: "age",
    type: "Number",
    message: "Enter your age: "
}]);
// it creates the object of name answer, input field name is age and the type defined for the object is Number.
console.log(typeof answer);
console.log(typeof answer.age);

console.log("InshaAllah, in "+(60 - answer.age)+" years you will be 60 years old.");
console.log(typeof answer.age);