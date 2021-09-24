<template>
  <div>
    <ul>
          <li v-for="item in items" :key="item.id">
            <router-link
              :to="item.path"
              class="li-content flex items-center px-6 mb-3 place-content-between hover:text-black">
              <div class="flex items-center">
                <!-- <component :is="item.icon"></component> -->
                <p class="ml-4 text-white">{{item.name}}</p>
              </div>
            </router-link>
          </li>
        </ul>
  </div>
</template>
<script>
export default {
  name: "Categorias",
  data() {
    return {
      posts: [],
      
      items: [
        {
          id: 1,
          /* icon: "Table",  */
          name: "Historia",
          path: "/categorias/historia"
        },
        {
          id: 2,
          /* icon: "App", */
          name: "Comunidad",
          path: "/categorias/comunidad"
        },
      ],
    }
  },
}
</script>
<style scoped>

</style>