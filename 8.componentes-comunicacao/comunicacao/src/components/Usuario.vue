<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p> Nome é: {{ nome }} </p>
        <p> Idade é: {{ idade }} </p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event.novo"
                @idadeMudou="idade = $event"
                :reiniciarFn="reiniciarNome"
                :altIdade="alterarIdadeCallback"
             />
            <app-usuario-editar
                :idade="idade"
               
                :altIdade="alterarIdadeCallback"
             />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    data() {
        return{
            nome: "Pedro",
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = "Ana"
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        },
        alterarIdadeCallback() {
            this.idade = 35
        }
    },
    components: { AppUsuarioInfo, AppUsuarioEditar }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
