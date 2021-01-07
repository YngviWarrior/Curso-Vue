<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p> Idade é: {{ idade }} </p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="altIdade">Altarar Idade (Callback)</button>
    </div>
</template>

<script>
import Barramento from '@/barramento'

export default {
    props: {
        idade: Number,
        altIdade: Function
    },
    methods:{
        alterarIdade(){
            this.idade = 33
            //this.$emit('idadeMudou', 33)
            Barramento.mudarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
