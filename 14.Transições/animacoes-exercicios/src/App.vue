<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<!-- o atributo variant aplica coloração do css Bootstrap. -->
		<b-button variant="primary" class="mb-4"
			@click="exibir = !exibir">Mostrar Mensagem</b-button>
		
		<!-- nome da classe -->
		<!-- <transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>
		</transition> -->
		<!-- type, irá priorizar o tempo da animação ou transição, caso 1 seja maior -->
		<!-- <transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir"> {{ msg }} </b-alert>
		</transition> -->
		<!-- Classes importadas por link, no index, 
			estamos usando nomeclaturas fora do padrão vue -->
		<!-- <transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert variant="info" show v-show="exibir"> {{ msg }} </b-alert>
		</transition> -->
		<!-- <hr>

		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select> -->
		<!-- Necessario o atributo key para funcionar a transição. -->
		<!-- mode="out-in" tira o elemento e depois entra o outro. -->
		<!-- <transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info"> {{ msg }} </b-alert>
			<b-alert variant="warning" show v-else key="warn"> {{ msg }} </b-alert>
		</transition>
		
		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button> -->
		<!-- 8 métodos de ciclo de vida para transiçoes em JS (HOOKS) -->
		<!-- :css, não deixa css influenciar na transition -->
		<!-- <transition
			:css="false" 
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa">

			</div>
		</transition>
		
		<hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-2"
				@click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="secondary" 
				@click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->
		<hr>
		
		<b-button class="mb-4" @click="add">Add</b-button>
		<!-- Só funciona se tiver :key, tag, escolhe a tag q vai envolver o grupo. -->
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-item @click="remove(i)">
					{{ aluno }}
				</b-list-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia";
import AlertaInfo from "./AlertaInfo";
export default {
	components: {
		AlertaAdvertencia, 
		AlertaInfo
	},
	data() {
		return {
			alunos: ['roberto', 'julia', 'teresa', 'paulo'],
			msg: 'Umas mensagem de informção para o usuário!',
			exibir: false, // flag para display html
			/*Se o html, aparecer quando carregar a página, o atributo appear na 
				tag transition fará a animação e transição inves de aparecer abruptamente.*/
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		add() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		remove(indice) {
			this.alunos.splice(indice, 1)
		},
		animar(el, dona, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (negativo ? -rodada * 10: rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20);
		},
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
			//done() //Dizer q animação foi concluida, continuando o script, fazendo acontecer.
		},
		// afterEnter(el) {
		// 	console.log('afterEnter')
		// },
		// enterCancelled(el) {
		// 	console.log('enterCancelled')
		// },
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
		// afterLeave(el) {
		// 	console.log('afterLeave')
		// },
		// leaveCancelled(el) {
		// 	console.log('enterCancelled')
		// },
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
/* Padrão vue: 
	nome da classe + enter, enter-active, enter-to ou leave, leave-active, leave-to */
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s;
}

/*.fade-enter-to {
	opacity: 1;
}
    Já são valores padrões, saindo de 0 vai p 1
.fade-leave {
	opacity: 1;
}*/

/* Keyframes no eixo y */

@keyframes slide-in {
	from { transform: translateY(40px);	}
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.caixa {
	height: 100px;
	widows: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.slide-move {
	transition: transform 1s;
}

</style>
