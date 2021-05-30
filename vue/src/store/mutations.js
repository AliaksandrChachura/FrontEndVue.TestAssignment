export default {
	add_todo(state, todo) {
		state.tasks.push(todo);
	},
	delete_todo(state, id) {
		state.tasks = state.tasks.filter((todo) => todo.id != id);
	},
	update_todo(state, payload) {
		let todo = payload.todo;
		let index = state.tasks.findIndex((t) => t.id == todo.id);
		let field = payload.field;
		let value = payload.value;
		state.tasks[index][field] = value;	
	}
};