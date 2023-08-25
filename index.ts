import  add  from "./addition.js";
import chalk from "chalk";
import { subtract } from "./subtraction.js";
import { multiply } from "./multiplicaton.js";
import { division } from "./division.js";
import inquirer  from "inquirer";
async function run_again() {
    let answers = await inquirer.prompt([
        {
            name: "number1",
            type: "number",
            message: "Enter your number 1",
        },
        {
            name: "number2",
            type: "number",
            message: "Enter your number 2",
        },
        {
            name: "operator",
            type: "list",
            choices: ["+", "-", "/", "*"],
            message: "Select your operator",
        },
    ]);

    if (answers.operator === "+") {
        console.log(add(answers.number1, answers.number2));
    } else if (answers.operator === "-") {
        console.log(subtract(answers.number1, answers.number2));
    } else if (answers.operator === "*") {
        console.log(multiply(answers.number1, answers.number2));
    } else if (answers.operator === "/") {
        console.log(division(answers.number1, answers.number2));
    } else {
        console.log("Invalid input");
    }

    let repeat = await inquirer.prompt([
        {
            name: "Repeat",
            type: "list",
            choices: ["Y", "N"],
            message: "Do you want to repeat your operation?",
        },
    ]);

    if (repeat.Repeat === "Y") {
        run_again();
    } else {
        console.log("The process has ended");
    }
}
run_again();




