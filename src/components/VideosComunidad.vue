<template>
  <div class="row mb-10">
    <router-link :to="item.path" v-for="item in items" :key="item.id" class="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer mb-4" >
      <div class="grid" style="grid-template-rows: 1fr auto">
        <div class="video flex justify-center items-center position-relativa">
          <video class="imagen" :src="item.url"></video>
          <svg xmlns="http://www.w3.org/2000/svg" class="tamano h-6 w-6 position-absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p class="texto">{{item.name}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>



export default {
  name: "VideosHistoria",
  components: {
  },
  data() {
    return {
      items: [
          {
              "id": 1,
              "url": "https://camilo9497.github.io/videos-alcaldia/assets/21-05-20%20DON%20DANIEL.mp4",
              "name": "Apoyo a la comunidad en el barrio playa rica, contrucion de espacio cultural y bilioteca",
              "path": "/categorias/comunidad/1"
          },
          {
              "id": 2,
              "url": "https://camilo9497.github.io/videos-alcaldia/assets/21-05-27%20DIANA%20SARMIENTO%20UBUNTU.mp4",
              "name": "Fundaciom Ubuntu, Apoyo a la comunidad",
              "path": "/categorias/comunidad/2"
          },
          {
              "id": 3,
              "url": "https://camilo9497.github.io/videos-alcaldia/assets/21-06-01%20HISTORIA%20VICTOR%20SANTA%20F%C3%89.mp4",
        "name": "Apoyo a la comunidad barrio Santa fe, aprendizaje de ornamentacion y soldadura",
              "path": "/categorias/comunidad/3"
          },
          {
              "id": 4,
              "url": "https://camilo9497.github.io/videos-alcaldia/assets/21-06-10%20YEISON%20EL%20PAPI.mp4",
              "name": "Labor social en la comunidad barrio brisas del guatiquia, recreacion para niños",
              "path": "/categorias/comunidad/4"
          }
      ]
    }
  },
}
</script>
<style scoped>
 

  .imagen{
    border-radius: 10px;
  }

  .tamano{
    color: white;
  }

  p {
    top: 0;
    display: -webkit-box;
    margin-top: 5px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 20px;
    font-size: 14px;
    color: rgb(119, 119, 119);
    text-decoration: none;
}
</style>