const deleteTodo = {
	controlElems() {
		const btnDel = document.querySelectorAll(".todo button.delete");
		btnDel.forEach(item => {
			item.addEventListener("click", this.elemsTarget);
		});
	},
	elemsTarget(e) {
		const tr = e.target.closest("tr");
		tr.remove();
	},
	reload() {
		this.controlElems();
	},
};

export default deleteTodo;
