import TodoItem from "./Todoitem";
import { data } from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos: TodoItem[] = data.map((item) => new TodoItem(item.id, item.task, item.complete));

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("Javascript 학습하기");
myTodoCollection.addTodo("react 학습하기");

myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
// myTodoCollection.todoItems.forEach((item) => item.printDetails());
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("========================");
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());

myTodoCollection.removeComplete();
console.log("===========delete=============");

myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("========================");
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
