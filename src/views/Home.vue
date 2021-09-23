<template>
  <div class="home">
    <div class="Content">
      <div class="flex flex-col mb-5">
        <h1 class="font-bold mb-4" style="font-size: 22px;">Descripcion</h1>
        <p>Use only one cookie for all transactions that are joined using a pipe ( “|” ) 
          symbol in order to avoid assigning a cookie to each transaction. Now, 
          the ongoing transaction ID will be added to this newly created transaction cookie every 
          time a transaction is sent to Google Analytics.</p>
      </div>
      <div>
        <h1 class="font-bold mb-4" style="font-size: 22px;">Recientes</h1>
        <Recientes/>
      </div>
    </div>

    <div class="ads">
      
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
  .home {
    display:grid;
    grid-template-columns: 70% 30%;
  }
  
  @media (max-width: 768px) {
    .home {
      display: flex;
      flex-direction: column;
    }
  }
</style>
