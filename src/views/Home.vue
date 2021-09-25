<template>
  <div class="home-container p-4">
    <div class="description-container mb-4">
      <div class="vide-container flex justify-center items-center justify-center">
        <video class="rounded" src="https://camilo9497.github.io/videos-alcaldia/assets/21-05-20%20DON%20DANIEL.mp4" controls style="width:90%;"></video>
      </div>

      <div class="flex items-center">
        <div class="flex flex-col">
          <h1 class="font-bold mb-4" style="font-size: 25px; color: #2B5AC4;">Conoce nuestro llano</h1>
          <p>Use only one cookie for all transactions that are joined using a pipe ( “|” ) 
            symbol in order to avoid assigning a cookie to each transaction. Now, 
            the ongoing transaction ID will be added to this newly created transaction cookie every 
            time a transaction is sent to Google Analytics.</p>
        </div>
      </div>
    </div>
      <div>
        <h1 class="font-bold mb-4" style="font-size: 25px; color: #2B5AC4;">Recientes</h1>
        <Recientes/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Recientes from '@/components/Recientes.vue'

export default {
  name: 'Home',
  components: {
    Recientes,
  },
  
}
</script>

<style scoped>
  .description-container {
    height: 60vh;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  
  @media (max-width: 768px) {
    .description-container {
      height: max-content;
      display: flex;
      flex-direction: column;
    }

    .vide-container {
      padding-bottom: 30px;
    }
  }
</style>
