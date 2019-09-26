"use strict";
exports.__esModule = true;
var todoItem_1 = require("./todoItem");
var todoCollection_1 = require("./todoCollection");
var todos = [
    new todoItem_1.TodoItem(1, "buy flowers"),
    new todoItem_1.TodoItem(2, "buy food"),
    new todoItem_1.TodoItem(3, "buy tickets"),
    new todoItem_1.TodoItem(4, "buy dinner"),
];
var collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log("'" + collection.userName + "'s Todo List");
var newId = collection.addTodo("Go for run");
var todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
