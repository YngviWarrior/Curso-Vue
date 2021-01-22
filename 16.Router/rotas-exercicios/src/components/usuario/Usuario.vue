<template>
  <div class="usuario">
    <h2>Usuario</h2>
    <hr>
    <router-view />
    <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to, from) { //to id da url nova, from id url da antiga
  //     this.id = to.params.id
  //   }
  // },
  methods: {
    irParaInicio(){
      // this.$router.push('/')
      // this.$router.push({path: '/'})
      this.$router.push({name: 'inicio'})
    },
  }
}
</script>