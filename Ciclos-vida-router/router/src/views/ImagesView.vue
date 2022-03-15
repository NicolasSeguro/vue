<template>
    <div>
        <h1> Galeria de imágenes: </h1>
        <!-- 11 - Recorremos el array utilizando v-for / la redireccion va a estar realizada con router query -->
        <router-link 
            :to="{ name: 'images', params: {id: image}}" 
            v-for="(image, index) of images" :key="index">
            <button>
                Imagen {{image}}
            </button>
        </router-link>
        
        <!--  9 - Creo y Agrego un componente en una vista -->
       <images-comp/>

        <!-- 12 - Podemos utilizar router go para movernos en el historial -->
       <button @click="anterior">Anterior</button>
       <button @click="siguiente">Siguiente</button>

        <!-- 14 - Router push para ir a otras secciones -->
       <button @click="home">Volver a Home</button>

        <!-- 16 - Router replace / Ir a home pero sin poder luego volver atras-->
        <!-- Funciona igual que router push pero con una diferencia. Con el push se navega a la ruta y se guarda la ruta actual en la historia del navegador para que el usuario pueda volver a la página anterior pulsando sobre el botón de atrás en el navegador.
        Con router replace el usuario al pulsar sobre el enlace no podrá volver a la página anterior. Esto se suele usar por ejemplo cuando haces un logout del usuario o cuando queremos sacarlo de una página y no queremos que pueda echar hacia atrás la historia del navegador.-->
        <button @click="homeReplace">Volver a home sin historial</button>

      
    </div>
</template>

<script>
import ImagesComp from '@/components/ImagesComp.vue'

export default {
    components: {
        ImagesComp
    },
    // 10 creamos un array de imagenes
    data () {
        return {
            images: [1, 2, 3]
        }
    },
   
    methods: {
         // 15 - Router push
        home() {
            this.$router.push('/')
        },
        // 17 - Replace - de acá ir a mostrar las rutas hijas en index.js
        homeReplace() {
            this.$router.replace('/')
        },
        // 13 - Router go 
        anterior() {
            this.$router.go(-1)
        },
        siguiente() {
            this.$router.go(1)
        },

    }
}
</script>
