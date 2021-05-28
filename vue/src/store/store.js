import { createStore } from 'vuex'
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
	state() {
		return {
			tasks: [
				{id: 1, title: "Create nice components", description: "chop chop chop"},
				{id: 2, title: "Hook up logic", description: "This is where the fun begins"},
				{id: 3, title: "Apply magic dust", description: "Sprinkle sprinkle"}
			]
		}
	},
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters
})

export default store;
