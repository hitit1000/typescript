"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todoitem_1 = __importDefault(require("./Todoitem"));
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const sampleTodos = data_1.data.map((item) => new Todoitem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("Javascript 학습하기");
myTodoCollection.addTodo("react 학습하기");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
