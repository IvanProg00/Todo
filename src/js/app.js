import {renderThead, renderTbody} from "./module/renderTodos";
import addTodo from "./module/addTodo";

const users = [
	["Mark", "Content 1"],
	["John", "Content 2"],
	["Ivan", "Content 3"],
];

window.addEventListener("load", start);

function start() {
	renderThead();
	renderTbody(users);
	addTodo();
}