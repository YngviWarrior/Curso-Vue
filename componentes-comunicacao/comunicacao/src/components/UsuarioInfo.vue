<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p> Idade é: {{ idade }} </p>
        <button @click="reverterNome()">Reverter Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import Barramento from '@/barramento'

export default {

    //props: ['nome'],
    props: {
        //nome: [String]
        nome: {
            type: String,  //Validação de Propriedades passadas no componente pai.
            //required: true,
            //default: function() {
            //    return Array(10).fill(0).join(' ')
            //}
            default: "Anônimo",
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reverterNome() {
            this.nome = 'Pedro'
            this.$emit('nomeMudou', {novo:this.nome})
        }
    },
    created() {
        Barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
