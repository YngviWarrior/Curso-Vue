new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        alertClick() {
            alert("1ª etapa.")
        },
        keydown(e) {
            this.valor = e.target.value
        },
        keydownEnter(e) {
            this.valor = e.target.value
        }
    }
})