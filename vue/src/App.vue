<template>
	<div>
		<the-header />
		<todo-input />
		<todo-list />		
	</div>
</template>

<script>

import TheHeader from "./components/TheHeader"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"

export default {
	data() {
		return {
			
		}
	},
	components: {
		TheHeader,
		TodoList,
		TodoInput
	}
}
</script>

<style scoped>

</style>
