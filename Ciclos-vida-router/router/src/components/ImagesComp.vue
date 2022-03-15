<template>
    <div>
        <!-- 10 - Para leer la ruta tenemos propiedades disponibles que nos permiten mostrar el parametro de forma dinamcia a traves de la url la informacion a nuestro componente -->
        <h1>Imágenes desde el componente:  {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    name: 'ImagesComp'
}
</script>
