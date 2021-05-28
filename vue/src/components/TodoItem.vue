<template>
	<tr>
		<td>{{ todo.id }}</td>
		<td>{{ todo.title }}</td>
		<td><small>{{ todo.description }}</small></td>
		<td>
			<button 
				class="btn-danger btn-small"
				@click="deleteTodo(todo.id)"
			>Delete
			</button> &nbsp;
			<button 
				class="btn-secondary btn-small"
				@click="updateTodoI(todo)"
			>Edit
				</button>
		</td>
	</tr>



	<!-- <div class="row my-3 justify-content-between align-items-center">
	<h3 v-if="!editing">{{ todo.title }}</h3>

	<div
		v-else
		class="mr-2 row justify-content-between align-items-center col"
	>
		<input
		v-bind:value="todoText"
		@change="todoTextChange"
		type="text"
		class="col-7 form-control"
		/>
		<div>
		<input
			:checked="completed"
			class="mr-1"
			@change="onCompleted"
			type="checkbox"
		/>
		<label class>Completed</label>
		</div>
	</div>
	<div class="row align-items-center">
		<button @click="updateTodoI(todo)" class="btn btn-primary mx-2">
		{{ editing ? "Update" : "Edit" }}
		</button>
		<button @click="deleteTodo(todo.id)" class="btn btn-danger">
		Delete
		</button>
	</div>
	</div> -->
</template>

<script>
import { mapActions } from "vuex";

export default {
props: {
	todo: {
		type: Object,
		required: true
	},
},
data() {
	return {
	todoText: "",
	editing: false,
	completed: false,
	};
},
methods: {
	...mapActions(["deleteTodo", "updateTodo", "changeCompleted"]),
	onCompleted() {
	this.completed = this.completed == true ? false : true;
	},
	todoTextChange(e) {
	this.todoText = e.target.value;
	},
	updateTodoI(todo) {
	this.editing = this.editing == true ? false : true;
	if (this.editing) {
		this.todoText = todo.title;
		this.updateTodo(todo);
	} else {
		todo.title = this.todoText;
		todo.complete = this.completed;
		this.changeCompleted();
	}
	},
},
};
</script>

<style scoped></style>
