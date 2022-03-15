<template>
  <div id="app">
    <nav>
      <!-- 1 - Agrega los accesos de las vistas en el nav -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <!-- 7 - Agregamos el ruteo en el navbar y mostramos el linkeo con :to-->
      <router-link :to="{name: 'services'}">Services</router-link> | 
      <router-link to="/images">Imágenes</router-link> | 
      <router-link to="/admin">Perfil</router-link>
    </nav>
    <!-- 2 - Muestra las vistas -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* 3 - Acá podemos cambiar los estilos la ruta seleccionada - crear otra vista y agregarla en app y en el index de router */
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
