export default {
	changeCompleted(context) {
		context.commit("change_complete");
	},
	addTodo(context, todo) {
		context.commit("add_todo", todo);
	},
	deleteTodo(context, id) {
		context.commit("delete_todo", id);
	},
	updateTodo(context, todo) {
		context.commit("update_todo", todo);
	}
};