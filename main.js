#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["huzaifa", "hassan"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.select == "add") { }
        let addTodo = await inquirer.prompt({
            type: "input",
            message: "add items in the list",
            name: "todo",
        });
        todos.push(addTodo.todo);
        todos.forEach(todo => console.log(todo));
        //console.log(todos)
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "add items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter(value => value !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("****** // TO DO LIST// ******");
            console.log(todos);
            console.log("***///***///***");
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(value => value !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
