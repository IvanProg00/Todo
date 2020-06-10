export default (tbodyModel) => {
	const thead = document.querySelector(".todo thead");
	const tbody = document.querySelector(".todo tbody");

	const theadModel = ["#", "User", "Content", "Remove"];

	function renderThead() {
		const theadBlock = document.createElement("tr");
		theadModel.forEach(item => {
			const title = document.createElement("td");
			title.innerHTML = item;
			theadBlock.appendChild(title);
		});
		thead.appendChild(theadBlock);
	}
	function renderTbody() {
        const fragment = document.createDocumentFragment();
        let id = 1;

        tbodyModel.forEach(item => {
            const tbodyBlock = document.createElement("tr");

            const idx = document.createElement("td");
            const user = document.createElement("td");
            const content = document.createElement("td");
            const btn = document.createElement("button");
            const remove = document.createElement("td");

            btn.classList.add("delete");

            idx.textContent = id++;
            user.textContent = item[0];
            content.textContent = item[1];
            btn.textContent = "X";
            remove.appendChild(btn);

            tbodyBlock.appendChild(idx);
            tbodyBlock.appendChild(user);
            tbodyBlock.appendChild(content);
            tbodyBlock.appendChild(remove);

            fragment.appendChild(tbodyBlock);
        });
        tbody.innerHTML = "";
        tbody.appendChild(fragment);
    }

	renderThead();
	renderTbody();
};
