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
        h-16">
      <Profile />
      <p class="ml-2 text-white font-regular">Juan Sanchez</p>
    </div>

    <div class="main-content flex flex-col" style="background-color: #2B5AC4;">
      <div class="button-container flex justify-center my-8">
        <router-link
          to="/directory/destacadas"
          style="background-color: #00E68E;"
          class="
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
          <li>
            <router-link
              to="/"
              class="li-content flex items-center px-6 mb-4 place-content-between hover:text-white"
              style="text-decoration: none;">
              <div class="flex items-center">
                <Home/>
                <p class="ml-4 text-white">Home</p>
              </div>
            </router-link>
          </li>
          <li class="li-content flex items-center px-6 mb-4 place-content-between">
              <div class="flex items-center">
                <CategoriasIcon/>
                <p class="ml-4 text-white">Categorías</p>
              </div>
              <ChevronDown/>
          </li>
        </ul>
        <Categorias/>
        <!-- <NewModules /> -->
      </div>
      <div class="config-container max-w-full flex justify-center items-center h-16 mt-auto">
        <router-link to="/" class="flex">
          <Config />
          <p class="ml-3 text-white">Configuración</p>
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
import Home from './icons/Home.vue'
import CategoriasIcon from './icons/Categorias.vue'
import Categorias from './Categorias.vue'


export default {
  name: "Sidebar",
  components: {
    Profile,
    Plus,
    ChevronDown,
    Config,
    Categorias,
    CategoriasIcon,
    Home
    /* NewModules, */
  },
  data() {
    return {
      posts: [],
      
      items: [
        {
          id: 1,
          /* icon: "Table",  */
          name: "Educación",
        },
        {
          id: 2,
          /* icon: "App", */
          name: "Tecnología",
        },
        {
          id: 3,
          /* icon: "App", */
          name: "Ambiente",
        },
        {
          id: 4,
          /* icon: "App", */
          name: "Historias",
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

.workspace {
  background-color: #346BEB ;
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
