<template>
	<div class="row">
	<div class="col col-12">
		<table>
		<thead>
			<tr>
			<th>#</th>
			<th>Title</th>
			<th>Description</th>
			<th>Edit</th>
			</tr>
		</thead>
		<tbody >
			<todo-item
				v-for="(todo, index) in allTasks" 
				:key="todo.id"
				:todo="todo"
				:index="index + 1"
			/>	
			
		</tbody>
		</table>
	</div>
	</div>
</template>

<script>
	import TodoItem from "./TodoItem"
	import { mapGetters } from "vuex";

	export default {
		data() {
			return {
				
			}
		},
		components: {
			TodoItem
		},
		computed: {
			...mapGetters(["allTasks"])
		}
	}
</script>

<style scoped>

</style>