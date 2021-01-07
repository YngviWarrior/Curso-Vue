new Vue({
	el: '#desafio',
	data: {
		change: '',
		girar: 'rotate45',
		largura: 'width',
		classCss: '',
		classCss2: '',
		classCss3: {
			width: '150px',
			height: '25px',
			color: 'green',
		},
		cor: '',
		ativado: true,
		progress: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.change = this.change == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
			/*if(this.change == 'destaque')
				this.change = 'encolher'
			else
				this.change = 'destaque'*/
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor +=5
				this.progress = valor + '%'
				if(valor == 100) clearInterval(temporizador)
			},500)
		},
		setTrue(event) {
			//event.target.value == true ? false : true
			if(event.target.value == "true") 
				this.ativado = true
			else if(event.target.value == "false")
				this.ativado = false
		}
	}
})
