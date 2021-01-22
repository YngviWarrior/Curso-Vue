<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong> {{ id }} </p>
      <!-- :to="`/usuario/${id}/editar`" -->
    <router-link tag="button" primario 
      :to="{ name: 'editarUsuario', params: { id: id },
      query: {completo: false, lingua: 'eng'},
      hash: '#rodape' }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouteEnter(to, from, next) { //Antes do componente ser criado, não acessa nem Props.
    console.log('dentro do componente -> usuário detalhe')
    // next(vm => { //callback acessando props
    //   console.log(vm.id)
    // })
    const autentificado = true
    autentificado ? next() : next(false)
  }
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
}
</script>