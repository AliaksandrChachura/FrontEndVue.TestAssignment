<template>
	<tr>
		<td>{{ index }}</td>		
		<td v-if="editable === false"> 
			<span>
				{{ todo.title }}
			</span>			
		</td>
		<td v-if="editable === true">
			<input
				:value="todo.title"
				type="text" 
				@input="inputChange($event.target.value, todo, 'title')"
			/>
		</td>
		<td v-if="editable === false"> 
			<small>
				{{ todo.description }}
			</small>		
		</td>
		<td v-if="editable === true">
			<input	
				:value="todo.description"		
				type="text" 
				@keyup.enter="inputChange($event.target.value, todo, 'description')"
			/>
		</td>
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

</template>

<script>
import { mapActions } from "vuex";

export default {
	props: {
		todo: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			editable: false
		};
	},
	methods: {
		...mapActions(["deleteTodo", "updateTodo"]),
		todoTextChange(e) {
			this.todoText = e.target.value;
		},
		updateTodoI(todo) {
			this.editable = !this.editable
			this.todoText = todo.title;
				
		},
		inputChange(value, todo, field) {	
			let payload = {value: value, todo: todo, field: field}
			this.updateTodo(payload);
			this.editable = !this.editable
		}
	},
};
</script>

<style scoped>
	
</style>
