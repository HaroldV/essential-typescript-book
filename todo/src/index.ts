import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as  inquirer from "inquirer";
import { JsonTodoCollection } from "./jsonTodoCollection"

let todos: TodoItem[] = [
    new TodoItem(1, "buy flowers"),
    new TodoItem(2, "buy food"),
    new TodoItem(3, "buy tickets"),
    new TodoItem(4, "buy dinner", true),
];

let collection: TodoCollection = new JsonTodoCollection("Adam", todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
enum Commands {
    Add = "Add New Task",
    Toggle = "Show/Hide Completed",
    Quit = "Quit",
    Completed = "Complete Task",
    Purge = "Remove Completed Task"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Completed:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                } else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }

    })
}

function promptAdd(): void {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task:"
    }).then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    })
}

function promptComplete(): void {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Task Complete",
        choices: collection.getTodoItems(showCompleted).map(item => ({ name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"] as number[];
        collection.getTodoItems(true).forEach(item =>
            collection.markComplete(item.id,
                completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    })
}

promptUser();

// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// todoItem.printDetails();

// collection.removeComplete();
// collection.getTodoItems(true).forEach(item => item.printDetails());
