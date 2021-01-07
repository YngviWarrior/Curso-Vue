new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        resultado (novo, antigo) {
            setTimeout (() => {
                this.valor = 0        
            }, 5000)
        },
    },
    computed: {
        resultado() {
            return this.valor
        }
    },
});