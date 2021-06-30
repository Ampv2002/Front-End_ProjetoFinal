<template>
  <v-app>

      
    <v-app-bar  prominent dense class="indigo lighten-1">
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="nav white--text" ></v-app-bar-nav-icon>
      
      <v-toolbar-title >
        
      </v-toolbar-title>
        
      <v-spacer  class="titulo text-center center "><v-btn :ripple="false" class="api-btn white--text" style="padding-top: 18px" height="0" width="0" elevation="0"  href="/produto" color="indigo lighten-1" ><img height="80" src="@/assets/library.png"/></v-btn></v-spacer>

      <v-btn elevation="0" color="indigo lighten-1" class="logbtn white--text" href="/registo">
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
    <v-footer color="indigo lighten-1" padless >
      <v-row justify="center" no-gutters class="text-center center">
        <v-btn v-for="link in links" :key="link[0]" :href="link[1]" color="white" text rounded class="my-2" :target="link[2]">
          <v-icon>{{link[0]}}</v-icon>
        </v-btn>
        <v-col class="black py-2 text-center white--text" cols="12">
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
        ['mdi-home', '/', '_self'],
        ['mdi-email', 'mailto:afonsomiguelvieira@gmail.com','_blank'],
        ['mdi-twitter', 'https://twitter.com/ampv2016', '_blank'],
      ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};

</script>

