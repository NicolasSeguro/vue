<template>
  <div>
      <h1>Imágenes</h1>

      <div v-for="image in images" :key="image.id">
          <h2>{{ image.id }} - {{ image.title }}</h2>
          <img :src="image.url" alt="">
      </div>
  </div>
</template>

<script>
// Importamos la libreria
import axios from 'axios';

export default {
    name: 'AxiosImage',

    data() {
        return {
            images: []
        }
    },

    async created() {
        let url = 'https://jsonplaceholder.typicode.com/photos';

        // Con axios tenemos que acceder a 
        await axios.get(url).then((response) => (this.images = response.data));
    }
}
</script>

<style>

</style>