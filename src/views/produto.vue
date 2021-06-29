<template>
<div class="fundo">
  <v-container>
        <div class="row">
        <!-- Lista favoritos -->
        <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

            <div class="colunaFav">

                <div v-if="favoritos.length >0">
                  <h3><b>Favoritos</b></h3>
                  <div v-for="(fav, index) in favoritos" :key="index">
                      {{fav.Titulo}} <v-icon x-small @click="removeFav(index)">mdi-close-circle-outline</v-icon>
                  </div>
                </div>

          </div>
<!-- Lista Produtos -->
    
      <div class="colunaProduct">
        <v-card min-width="450" max-width="450" min-height="866" max-height="1000" class="mx-auto my-12" color="#66000000" elevation="0" v-for="(item, index) in info" :key="index">
          <div class="container">
          <div class="cellphone-container">    
              <div class="movie">       
                <div class="menu"><i class="material-icons"></i></div>
                <v-img class="movie-img" :src="item.Capa"></v-img>
                <div class="text-movie-cont">
                  <div class="mr-grid">
                    <div class="col1">
                      <h2>{{item.Titulo}}</h2>
                      <ul class="movie-gen">
                        <li>{{item.Preco}} / </li>
                        <li>{{item.Ano}} / </li>
                        <li>{{item.Genres}}</li>
                      </ul>
                    </div>
                  </div>
                  <div class="mr-grid summary-row">
                    <div class="col2">
                      <h5>SYNOPSIS</h5>
                    </div>

                  </div>
                  <div class="mr-grid">
                    <div class="col1">
                      <p class="movie-description">{{item.Synopsis}}</p>
                    </div>
                  </div>
                  <div class="mr-grid actors-row">
                    <div class="col1">
                      <p class="movie-actors">{{item.Author}}</p>
                    </div>
                  </div>
                    <div class="col2"><button @click='btnClick(item.Goodreads)' target="_blank" ><div class="watch-btn"><h3> GOODREADS </h3></div></button></div>
                    <div class="col2"><div class="favorite-button"><v-btn @click="favorito(item)">Favorito</v-btn></div></div>
                </div>
              </div>
          </div>
        </div>
        </v-card >
      </div>
  </div>
        <div class="text-center" v-if="keep_search != null || info.totalResults >= 10 ">
        <v-container max-width="100" min-height="100">
            <v-row justify="center">
            <v-col>
                <v-container>
                <v-pagination v-model="page" class="my-1" :length="calculaPaginas(info.totalResults)" :total-visible="11" @input="carregaPagina"></v-pagination>
                </v-container>
            </v-col>
            </v-row>
        </v-container>
        </div>
  </v-container>
</div>
</template>

<style lang="scss" scoped>

$accent-color: #e7e7e7;
$brand-color:#fe4141;
$dark-color: #1e1b26;

body .fundo {
background-image: url('../assets/bkg2.jpg');
}

.container{
  width:100%;
  height:100%;
}
.cellphone-container{  
  width:375px;
  height:700px;
  background-color:#1e1b26;
  margin : 60px auto 0 auto;
  
  border-radius: 4px;
}
.menu {
  position: absolute;
  right: 12px;
  top: 6px;
  z-index: 999;
  i {
    font-size: 40px;
    color: $brand-color;
    filter: drop-shadow(4px 4px 10px rgba(0,0,0,.5));
  }
}
.movie-img {
  width:100%;
  height:380px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: inherit;
  z-index:111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, 
			color-stop(0.00,  rgba(0,0,0,1)),
			color-stop(0.35,  rgba(0,0,0,1)),
			color-stop(0.50,  rgba(0,0,0,1)),
			color-stop(0.65,  rgba(0,0,0,1)),
			color-stop(0.85,  rgba(0,0,0,0.6)),
      color-stop(1.00,  rgba(0,0,0,0)));

  position:relative;

}

.movie{
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+39,1e1b26+53&0+38,1+55 */
background: -moz-linear-gradient(top,  rgba(255,255,255,0) 38%, rgba(255,255,255,0.06) 39%, rgba(30,27,38,0.88) 53%, rgba(30,27,38,1) 55%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 38%,rgba(255,255,255,0.06) 39%,rgba(30,27,38,0.88) 53%,rgba(30,27,38,1) 55%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(255,255,255,0) 38%,rgba(255,255,255,0.06) 39%,rgba(30,27,38,0.88) 53%,rgba(30,27,38,1) 55%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#1e1b26',GradientType=0 ); /* IE6-9 */

  position:absolute;
  background-size: contain;
  background-size: cover;
  z-index:1 !important;
  width:375px;
  height:660px;
  display:block;
  border-radius:4px;
}

.text-movie-cont{
  padding:0px 12px;
  text-align: justify;
}

.action-btn{
  text-align:right;
  i{
  color:$brand-color;
  font-size:28px;
  text-align:right;
  }  
}

.favorite-button{
  display:block;
  border-radius:5px;
  padding:4px;
  width: 140px;
  position: absolute;
  right:   -21px;
  bottom:  -38px;
  float: left
}

.watch-btn {
  h3{
    i{
      font-size:14px;
      margin-right:2px;
      position: relative;
      float: center;
      line-height: 1;
    }
  }
  display:block;
  border:1px solid $brand-color;
  border-radius:5px;
  padding:4px;
  width:140px;
  position: absolute;
  left:    10px;
  bottom:  -33px;
  float: left
}

.action-row{
  margin-top:24px;
}

.summary-row{margin-top:12px;}

/* TYPOGRAPHY STARTS */

/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,300italic,400italic,600italic,700italic,800italic);

$heading-font-family: 'Montserrat', sans-serif;
$paragraph-font-family: 'Open Sans', sans-serif;

$light: 300;
$regular: 400;
$semi-bold: 600;
$bold: 700;
$font-regular: 400;
$mont-bold: 700;

$text-movie-title:36px;
$text-summary:12px;
$text-action-btn:14px;
$text-movie-description:12px;

h1,h2,h3,h4,h5 {
  font-family:$heading-font-family;
  color:$accent-color;
  margin:0px;
  word-break: break-word;
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

h1 {
  font-size:$text-movie-title;
  font-weight:$font-regular;
}

h3 {
  font-size:$text-action-btn;
  font-weight:$font-regular;
  color:$brand-color;
}

h5 {
  font-size:$text-summary;
  font-weight:$font-regular;
}

.movie-gen{
  margin:0px;
  padding:0px;
    li{
    font-family:$paragraph-font-family;
    font-size:$text-summary;
    color:darken( $accent-color, 40% );
    width:auto;
    display:block;
    float:left;  
    margin-right:6px;
    font-weight:$semi-bold;
  }
}

.movie-likes{
  @extend .movie-gen;
  float:right;
  li{
    color:$brand-color;
    &:last-child {
        margin-right: 0px;
    }
    i{
      font-size:14px;
      margin-right:4px;
      position: relative;
      float: left;
      line-height: 1;
    }
  }  
}

.movie-details {
  font-family:$paragraph-font-family;
  font-size:$text-summary;
  font-weight:$light;
  color:darken( $accent-color, 20% );
  @extend .elements-distance;
}

.movie-description {
  font-family:$paragraph-font-family;
  font-size:$text-movie-description;
  font-weight:$regular;
  color:darken( $accent-color, 30% );  
  @extend .elements-distance;
  text-align: justify;
  line-height: 1.3;
}

.movie-actors {
  font-family:$paragraph-font-family;
  font-size:$text-summary;
  font-weight:$light;
  color:$accent-color;
  font-style: italic;
  @extend .elements-distance;
}

/* TYPOGRAPHY ENDS */

/** GRID STARTS **/

.thegrid { margin: 0 auto; }

.elements-distance{margin:0px}

.mr-grid { width: 100%; }
    .mr-grid:before, .mr-grid:after { content: ""; display: table; }
    .mr-grid:after { clear: both; }
    .mr-grid { *zoom: 1; }

.col1, .col2, .col3, .col3rest, .col4, .col4rest, .col5, .col5rest, .col6, .col6rest{ 
	margin:0% 0.5% 0.5% 0.5%;
    padding:1%;
    float: left;
    display: block;
}

/* Columns match, minus margin sum. E.G. margin-left+margin-right=1%, col2=50%-1% - added padding:1%*/

.col1 { width: 98%; }
.col2 { width: 47%; }
.col3 { width: 30.3333333333%; }
.col4 { width: 22%; }
.col5 { width: 17%; }
.col6 {width:13.6666666667%;}

	
/* Columns match with their individual number. E.G. col3+col3rest=full width row */

.col3rest { width: 63.6666666667%; }
.col4rest { width: 72%; }
.col5rest { width: 77%; }
.col6rest { width: 80.3333333333%;}

.dribbble-link {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  border-radius: 50px;
}
</style>

<style scoped>

.v-progress-circular {
  margin: 1rem;
}

.admin{
    background-color: lightgrey;
}

.Filmes{
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  background-color: lightgrey;
}

.poster{
  display: flex;
  justify-content: center;
}

.row {
  display: block;
  margin: auto;
}


.colunaProduct {
  flex: 80%;
  padding: 10px;
  display: grid;
  gap: 4px;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto auto auto;
  grid-row-gap: 100px;
}

.film {
  text-transform: capitalize;
  display: table;
  table-layout: fixed;
  width: 100%;
  word-break: break-word;
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.colunaFav {
  flex: 40%;
  padding: 10px;
}

.v-btn:hover {
  text-decoration: underline;
}
</style>

<script>

import axios from "axios";
export default {
  data() {
    return {
      loading1: false,
      info: null,
      page: 1,
      favoritos: [],
      keep_search: null,
      not_found: "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png",
      vertical: true,
      multiLine: true,
      snackbar: false,
      text: `Esse item já foi adicionado aos favoritos`,
    };
  },
  mounted() {
    var that = this;
    axios
      .get("https://projeto-f2622-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .then(response => (this.info = response.data.livro));
    console.log(that.info);
  },
  methods: {
    favorito(item) {
      if (this.favoritos.indexOf(item ) === -1){
        this.favoritos.push(item);
        
      }else {
        this.snackbar = true;
      }
      console.log(this.favoritos);
    },

    removeFav(item){
      this.favoritos.splice(item, 1)
      
    },

    procura(pesquisa) {
      this.loading1 = true
      this.keep_search = pesquisa
      axios.get("http://www.omdbapi.com/?s="+ encodeURIComponent(pesquisa) + "&page=1&apikey=47a567fc&" )
      .then(response => (this.info = response.data));
      this.loading1 = false
    },
  
  btnClick(id) {
      window.open("https://www.goodreads.com/book/show/"+ id);
    },
  beforeCreate: function(){
    document.body.className = 'Filmes'
  },
  
  carregaPagina(page){
    axios
    .get("http://www.omdbapi.com/?s="+encodeURIComponent(this.keep_search)+"&page="+page+"&apikey=47a567fc&")
    .then(response => (this.info = response.data));
  },

  calculaPaginas(resultados){
    var resto_divisao = resultados % 10
    var paginas = (resultados / 10) - (resto_divisao / 10)
    return paginas
  },
}
};
</script>
