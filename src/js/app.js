import renderTasks from "./module/renderTasks";

const users = [
	["Mark", "Content 1"],
	["John", "Content 2"],
	["Ivan", "Content 3"],
];

window.addEventListener("load", () => {
	renderTasks(users);
});
