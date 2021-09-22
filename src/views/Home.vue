<template>
  <div class="home">
    <div class="contbody">
      <div>
        <h1>Descripcion<br><br></h1>
        <p>Use only one cookie for all transactions that are joined using a pipe ( “|” ) 
          symbol in order to avoid assigning a cookie to each transaction. Now, 
          the ongoing transaction ID will be added to this newly created transaction cookie every 
          time a transaction is sent to Google Analytics.</p>
      </div>
      <div>
        publicidad
      </div>
    </div>
    <br>
    <div class="contbody">
      <div>
        <h1>Recientes</h1>
        <a ref="#">Video Uno</a>
        <a ref="#">Video Uno</a>
        <a ref="#">Video Uno</a>
        <a ref="#">Video Uno</a>
      </div>
      <div>
        publicidad
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px;
    font-weight: 1000;
    width: 50%;
  }
  p {
    font-size: 15px;
    width: 50%;
  }
  .contbody {
    display: flex;
    justify-content: space-between;
    margin: 50px;
  }
  h2 {
    margin: 50px;
  }
</style>
