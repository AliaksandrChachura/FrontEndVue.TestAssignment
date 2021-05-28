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
				v-for="todo in allTasks" 
				:key="todo.id"
				:todo="todo"
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
		},
		mounted() {
			console.log();
		}
	}
</script>

<style scoped>

</style>