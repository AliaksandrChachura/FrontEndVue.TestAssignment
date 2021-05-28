<template>
	<form>
		<div class="row">
			<div class="col col-5">
			<div class="form-group">
				<label for="input-1">Title</label>
				<input class="input-block" type="text" id="input-1" v-model="title">
			</div>
			</div>
			<div class="col col-5">
			<div class="form-group">
				<label for="input-2">Description</label>
				<input class="input-block" type="text" id="input-2" v-model="description">
			</div>
			</div>
			<div class="col col-2">
			<div class="form-group">
				<label>&nbsp;</label>
				<button type="submit" class="input-block btn-primary btn-small" @click="addTodoI">Add</button>
			</div>
			</div>
		</div>
	</form>
</template>

<script>

	import { mapActions } from "vuex";
	import { v4 } from "uuid";

	export default {
		data() {
			return {
				title: '',
				description: ''
			}
		},
		methods: {
			...mapActions(["addTodo"]),
			addTodoI() {
				console.log(v4())
				console.log(this.title)
				console.log(this.description)
				this.addTodo({
					id: v4(),
					title: this.title,
					description: this.description
				});
				// this.title = '';
				// this.description = '';
			}
		}
		
		
	};
</script>

<style scoped>

</style>