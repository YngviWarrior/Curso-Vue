<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="progress" />
		<NewTask @taskAdded="addTask" /> <!-- Por padrão o evento é passado. -->
		<TaskGrid :tasks="tasks"
				@taskDeleted="deleteTask"
				@taskStateChanged="toogleTaskState" />
	</div>
</template>

<script>
import NewTask from './components/NewTask'
import TaskGrid from './components/TaskGrid'
import TaskProgress from './components/TaskProgress'

export default {
	data(){
		return{
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true, // Monitorar as mudanças de estados dentro dos elementos do array.
			handler () {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	components: {
		TaskGrid,
		NewTask,
		TaskProgress
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0 //retorna true or false.
			
			reallyNew && this.tasks.push({
				name: task.name,
				pending: task.pending || true
			})
			
		},
		deleteTask(i) {
			this.tasks.splice(i, 1)
		},
		toogleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
