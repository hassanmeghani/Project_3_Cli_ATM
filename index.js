#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 202221;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw", "Fast Cash Withdraw", "Balance"],
        },
    ]);
    console.log(`Your current balance is: ${myBalance}`);
    if (operationAns.operation === "Withdraw") {
        let withdrawAnswer = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter the amount to withdraw",
            },
        ]);
        if (withdrawAnswer.withdraw <= myBalance) {
            myBalance -= withdrawAnswer.withdraw;
            console.log(`Your new balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient balance!");
        }
        console.log("Thank you for using our ATM!");
    }
    if (operationAns.operation === "Fast Cash Withdraw") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select a fast cash option",
                choices: ["5000", "10000", "20000", "50000"],
            },
        ]);
        myBalance -= parseInt(fastCashAnswer.fastCash);
        if (parseInt(fastCashAnswer.fastCash) > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            console.log(`Your new balance is: ${myBalance}`);
        }
        console.log("Thank you for using our ATM!");
    }
}
else {
    console.log("Incorrect pin!");
}
