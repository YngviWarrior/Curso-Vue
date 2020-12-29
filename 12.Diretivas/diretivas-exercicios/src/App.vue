<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva <strong> v-text </strong>'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <!-- v-teste:argumento.mod1.mod2.mod3="..."   -->
    <p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
    <p v-destaque="cor">Usando diretiva personalizada</p>

    <p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">
      Usando diretiva personalizada
    </p>
    <p v-destaque-local.alternar.atrasar="{cor1: 'red', atraso: 5000}">Usando diretiva personalizada</p>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    //Registro de diretiva local.
    "destaque-local": {
      bind(el, binding) {
        // constante c/ função, recebimento de um parametro e corpo da função.
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };
        let atraso = 0;

        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;

        let cor1 = binding.value.cor1;
        let cor2 = binding.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1);
          }
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "red",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
