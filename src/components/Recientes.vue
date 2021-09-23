<template>
  <div class="ads flex mb-10">
    <div v-for="item in items" :key="item.id" class="video-container grid cursor-pointer" style="grid-template-rows: auto auto">
      <div class="video flex justify-center items-center">
        <video class="rounded-t" :src="item.url" style="width:100%;"></video>
      </div>
      <div class="text-container h-10 px-2 flex items-center rounded">
        <p class=" text-white" style="font-size:14px;">{{item.name}}</p>
      </div>
    </div>

    <div v-for="item in items" :key="item.id" class="video-container2 grid cursor-pointer" style="grid-template-rows: auto auto">
      <div class="video flex justify-center items-center">
        <video class="rounded-t" :src="item.url" style="width:100%;"></video>
      </div>
      <div class="text-container h-10 px-2 flex items-center rounded">
        <p class=" text-white" style="font-size:14px;">{{item.name}}</p>
      </div>
    </div>

    <!-- <div v-for="item in items" :key="item.id" class="video-container3 grid cursor-pointer" style="grid-template-rows: auto auto">
      <div class="video flex justify-center items-center">
        <video class="rounded-t" :src="item.url" style="width:100%;"></video>
      </div>
      <div class="text-container h-10 px-2 flex items-center rounded">
        <p class=" text-white" style="font-size:14px;">{{item.name}}</p>
      </div>
    </div> -->

  </div>
</template>

<script>

export default {
  name: "Recientes",
  components: {
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Apoyo a la comunidad en el barrio playa rica, contrucion de espacio cultural y bilioteca',
          url: 'https://camilo9497.github.io/videos-alcaldia/assets/21-05-20%20DON%20DANIEL.mp4'
        },
        /* {
          id: 2,
          name: 'Fundaciom Ubuntu, Apoyo a la comunidad',
          url: "https://camilo9497.github.io/videos-alcaldia/assets/21-05-27%20DIANA%20SARMIENTO%20UBUNTU.mp4",
        }, */
      ]
    }
  },
}
</script>
<style scoped>
  .ads {
    justify-content: space-around;
  }

  .video-container {
    width: 275px;
    height: 150px;
  }

  .video-container2 {
    width: 275px;
    height: 150px;
  }


  .text-container {
    width: 275px;
    background-color: #00E68E;
  }

  .video {
    background-color: rgba(128, 128, 128, 0.349);
  }

  .text-container p {
    overflow:hidden; 
        white-space:nowrap; 
        text-overflow: ellipsis;
  }

  @media (max-width: 800px) {
    .video-container {
    }
    .video-container2 {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    .video-container3 {
      display: none;
    }
  }
</style>