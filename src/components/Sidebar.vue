<template>
  <input type='checkbox' id='collapsable' class="hidden">
  <div class="sidebar">
    <div
      class="
        workspace
        max-w-full
        flex
        justify-center
        items-center
        h-16
        bg-gray-50">
      <Profile />
      <p class="ml-2 text-blueGray-700">Juan Sanchez</p>
    </div>

    <div class="main-content flex flex-col">
      <div class="button-container flex justify-center my-8">
        <router-link
          to="/directory/destacadas"
          class="
            bg-indigo-600
            text-white
            p-1
            rounded-lg
            flex
            items-center
            w-4/5
            place-content-around">
          <p>Nuevo</p>
          <Plus />
        </router-link>
      </div>
      <div class="list-container">
        <ul>
          <li v-for="item in items" :key="item.id">
            <router-link
              :to="`/${item.type}/${item.id}`"
              class="li-content flex items-center px-6 mb-4 place-content-between">
              <div class="flex items-center">
                <!-- <component :is="item.icon"></component> -->
                <p class="ml-4 text-blueGray-600">{{item.name}}</p>
              </div>
              <ChevronDown v-if="item.isGroup" />
            </router-link>
          </li>
        </ul>
        <Categorias/>
        <!-- <NewModules /> -->
      </div>
      <div class="config-container max-w-full flex justify-center items-center h-16 mt-auto">
        <router-link to="/" class="flex">
          <Config />
          <p class="ml-3 text-blueGray-700">Configuración</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import Profile from './icons/Profile.vue'
import Plus from './icons/Plus.vue'
import ChevronDown from './icons/ChevronDown.vue'
import Config from './icons/Config.vue'
import Categorias from './Categorias.vue'


export default {
  name: "Sidebar",
  components: {
    Profile,
    Plus,
    ChevronDown,
    Config,
    Categorias
    /* NewModules, */
  },
  data() {
    return {
      posts: [],
      
      items: [
        {
          id: 1,
          /* icon: "Table",  */
          name: "Home",
          isGroup: false,
          type: "table",
        },
        {
          id: 2,
          /* icon: "App", */
          name: "Categorías",
          isGroup: true,
          type: "",
        },
      ],
    }
  },

};
</script>

<style>
.sidebar {
  width: 250px;
  height: 100vh;
  position: sticky;
  top: 0;
  transition: 0.3s;
  border-right: 1px solid #E5E7EB;
  display: grid;
  grid-template-rows: auto 1fr;
}

#collapsable:checked + .sidebar {
  width: 60px;
}

#collapsable:checked + .sidebar .chevron-down {
  display: none;
}

#collapsable:checked + .sidebar .workspace p {
  display: none;
}

#collapsable:checked + .sidebar .main-content .button-container p {
  display: none;
}

#collapsable:checked + .sidebar .main-content .list-container p {
  display: none;
}

#collapsable:checked + .sidebar .main-content .list-container .li-content {
  padding: 0;
  justify-content: center;
} 

#collapsable:checked + .sidebar .main-content .config-container p {
  display: none;
} 

@media (max-width: 600px) {
  #collapsable:checked + .sidebar {
    width: 0;
  }

  #collapsable:checked + .sidebar .main-content .button-container {
    display: none;
  }
  #collapsable:checked + .sidebar .config-container {
    display: none;
  }
}
</style>
