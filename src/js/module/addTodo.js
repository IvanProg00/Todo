import deleteTodo from "./deleteTodo";

export default () => {
	const form = document.forms["addTodo"];
	const userIn = form.elements["user"];
	const contentIn = form.elements["content"];
    const tbody = document.querySelector(".todo tbody");

	deleteTodo.controlElems();

	form.addEventListener("submit", e => {
        let lastId = document.querySelector(".todo tbody").lastElementChild.firstElementChild.innerText;
        lastId = +lastId + 1;

		e.preventDefault();
		const tbodyBlock = document.createElement("tr");

		const idx = document.createElement("td");
		const user = document.createElement("td");
		const content = document.createElement("td");
		const btn = document.createElement("button");
		const remove = document.createElement("td");

		btn.classList.add("delete");

		idx.textContent = lastId;
		user.textContent = userIn.value;
		content.textContent = contentIn.value;
		btn.textContent = "X";
		remove.appendChild(btn);

		tbodyBlock.appendChild(idx);
		tbodyBlock.appendChild(user);
		tbodyBlock.appendChild(content);
		tbodyBlock.appendChild(remove);

		tbody.appendChild(tbodyBlock);
		deleteTodo.stop();
	});
};
