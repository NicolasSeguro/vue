Vue.component('padre', {
    template: //html 
    `
    <section>
        <h4>Componente padre</h4>
        <!-- props para la comunicación entre componentes -->
        <!-- <hijo numero="16"></hijo> -->

        <hijo :numero="numeroPadre"></hijo>
        <button @click=numeroPadre++>+</button>
        <input v-model="numeroPadre">
    </section>
    `,
    data() {
        return {
            numeroPadre: 0
        }
    }
}) 