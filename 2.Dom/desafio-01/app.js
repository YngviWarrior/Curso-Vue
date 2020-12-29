new Vue({
    el: '#desafio',
    data: {
        nome: "Igor",
        idade: 25,
        idade3: 25*3,
        imgInvoker: "https://www.pngkit.com/png/full/379-3792651_invoker-dota-2-png.png"
    },
    methods: {
        random(){
            return Math.random()
        }
    }
})