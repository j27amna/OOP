#! usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log("WELCOME!!");
    const ans = await inquirer.prompt({
        name: "ques",
        type: "list",
        choices: ["staff", "student", "exit"],
        message: "Whom would you like to interact with?"
    });
    if (ans.ques == "staff") {
        console.log("Feel free to ask question from staff");
    }
    else if (ans.ques == "student") {
        const ans2 = await inquirer.prompt({
            name: "ques2",
            type: "input",
            message: "Enter student name..."
        });
        const student1 = persons.students.find(value => value.name == ans2.ques2);
        if (!student1) {
            const name = new Student(ans2.ques2);
            persons.addStudent(name);
            console.log(`Hello! My name is ${name.name}.\n `);
            console.log("New student added.\n");
            console.log("\t\tCurrent student list:");
            console.log("=>", persons.students);
        }
        else {
            console.log(`Hello! I'm ${Student.name}.\n Nice to see you again.\n`);
            console.log("\t\tExisting students:");
            console.log("=>", persons.students);
        }
    }
    else if (ans.ques == "exit") {
        console.log("Exiting the program");
    }
    else {
        console.log("Please select a valid operator");
    }
};
programStart(persons);
