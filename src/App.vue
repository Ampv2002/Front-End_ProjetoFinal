<template>
  <v-app>

      
    <v-app-bar dark prominent dense >
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="nav"></v-app-bar-nav-icon>
      
      <v-toolbar-title >
        
      </v-toolbar-title>
        
      <v-spacer  class="titulo text-center center"> <v-btn elevation="0"  href="/produto"><h1>Book Api</h1></v-btn> </v-spacer>

      <v-btn elevation="0" class="logbtn" href="/registo">
        sign in
        <!-- <v-icon>mdi-magnify</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary dark >
      <v-list nav dense >
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title
              ><router-link to="/produto"
                >Produto</router-link
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/admin"
                >Admin</router-link
              ></v-list-item-title
            >
          </v-list-item>        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view> </router-view>
    <v-footer color="primary lighten-1" padless >
      <v-row justify="center" no-gutters class="text-center center">
        <v-btn v-for="link in links" :key="link[0]" :href="link[1]" color="white" text rounded class="my-2" :target="link[2]">
          {{ link[0] }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>

</style>

<style scopped>
.vue-footer{
  display: flex;
  justify-content: center;
}
.nav{
  margin-top: 20px;
}

a{
  color: #FFFFFF;
}

.logbtn{
  color: #FFFFFF;
  margin-top: 25px;
}

.titulo{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  
}
</style>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
      links: [
        ['Home', '/', '_self'],
        ['Contact Us', 'mailto:afonsomiguelvieira@gmail.com','_blank'],
        ['Twitter', 'https://twitter.com/ampv2016', '_blank'],
      ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};

</script>

