<template>
  <div>
      <h1>
          Posteos
      </h1>

      <div v-for="post in posts" :key="post.id">
          <h2>{{ post.id }} - {{ post.title }}</h2>
          <p>{{ post.body }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FetchPost',

    data() {
        return {
            posts: []
        }
    },

    created() {
        let url = 'https://jsonplaceholder.typicode.com/posts';

        // Fetch nos permite pasar como parametro la url de la api a consumir / Agregar un segundo parametro, pero si no lo agregamos automaticamente crea una peticion GET
        // Funciona mediante promesas
        // Como segundo parametro, podemos utilizar POST para enviar data 
        // let text = { paragraph: 'Feliz cumple Niki'};

        // let post = {
        //     method: 'POST',
        //     body: JSON.stringify(text),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }

        fetch(url)
        .then(response => response.json())
        // Para guardar la respuesta en el objeto posts tengo que concatenar otra promesa que me guarde la data obtenida
        .then(data => this.posts = data)
    },

    // async created() {
    //     let url = 'https://jsonplaceholder.typicode.com/posts';

    //     const response = await fetch(url);
    //     const postData = await response.json();
    //     this.posts = postData;
    // }
}
</script>

<style>

</style>