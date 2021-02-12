<template>
  <v-toolbar app>
    <v-toolbar-title class="headline textuppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portifolio">Portifolio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    
    <v-toolbar-items>
      <v-btn flat>Finalizar Diar</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

</script>

<style>

</style>