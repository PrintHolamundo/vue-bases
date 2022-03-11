const app = Vue.createApp({

    // template: `
    // <h1>Hola Mundo</h1>
    // <p>  Desde app.js </p>
    // `

    data() {
        return {
            quote: "im batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log("Hola mundo")
            this.author = "Juan Perez"
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }

    }

})


app.mount('#myApp')




