export default {
	addTodo(context, todo) {
		context.commit("add_todo", todo);
	},
	deleteTodo(context, id) {
		context.commit("delete_todo", id);
	},
	updateTodo(context, payload) {
		context.commit("update_todo", payload);
	}
};