const app = Vue.createApp({
    // data or functions
    // template: '<h2>I am programer </h2>',
    data(){
        return {
            showbox: true,
            title: 'El olvido que seremos',
            author: 'Hector',
            age: 45
        }
    },
    methods: {
        changeTitle(nombre) {
            console.log('click')
            //this.title='La sombra del viento'
            this.title=nombre
        },
        toggleshowbox() {
            this.showbox=!this.showbox
        }
    }
})
app.mount('#app')