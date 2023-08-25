// async function performCalculation() {
//     const answers = await inquirer.prompt([
//       {
//         name: "number1",
//         type: "number",
//         message: "Enter your number 1",
//       },
//       {
//         name: "number2",
//         type: "number",
//         message: "Enter your number 2",
//       },
//       {
//         name: "operator",
//         type: "list",
//         choices: ["+", "-", "/", "*"],
//         message: "Select your operator",
//       },
//     ]);
  
//     let result;
//     switch (answers.operator) {
//       case "+":
//         result = add(answers.number1, answers.number2);
//         break;
//       case "-":
//         result = subtract(answers.number1, answers.number2);
//         break;
//       case "*":
//         result = multiply(answers.number1, answers.number2);
//         break;
//       case "/":
//         result = division(answers.number1, answers.number2);
//         break;
//       default:
//         console.log("Invalid input");
//         return;
//     }
  
//     console.log("Result:", result);
//   }
  
//   async function run() {
//     while (true) {
//       await performCalculation();
  
//       const repeat = await inquirer.prompt([
//         {
//           name: "Repeat",
//           type: "list",
//           choices: ["Y", "N"],
//           message: "Do you want to repeat your operation?",
//         },
//       ]);
  
//       if (repeat.Repeat === "N") {
//         console.log("The process has ended");
//         break;
//       }
//     }
//   }
  
//   run();
  
  