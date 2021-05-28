export default {
	add_todo(state, todo) {
		state.tasks.push(todo);
		// state.ttodos = state.todos;
	},
	delete_todo(state, id) {
		state.todos = state.todos.filter((todo) => todo.id != id);
		state.ttodos = state.todos;
	},
	update_todo(state, todo) {
		let index = state.todos.findIndex((t) => t.id == todo.id);
		if (index != -1) {
		state.todos[index] = todo;
		}
	},
	change_complete(state) {
		state.ttodos = state.todos;
		state.completed = state.completed == true ? false : true;
		state.ttodos = state.ttodos.filter((t) => t.complete == state.completed);
	},
	
	setTasksToState(state, payload) {
		state.tasks = payload;
	},

	setLinksToState(state, payload) {
		state.links = payload;
	}
};