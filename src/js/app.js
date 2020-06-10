import {renderThead, renderTbody} from "./module/renderTodos";
import addTodo from "./module/addTodo";

const users = [
	["Caine Tang", "Buy food."],
	["Kya Farmer", "Wash teeth."],
	["Kellan Horner", "Play football."],
	["Amayah Ali", "Play tennis"],
];

window.addEventListener("load", start);

function start() {
	renderThead();
	renderTbody(users);
	addTodo();
}