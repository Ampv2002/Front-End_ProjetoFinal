<template>

<div class="container">
    
    <form @submit.prevent="submeterfilme" class="form">
    <h2>Adicionar Filme</h2>
    <br>
        <div class="input-control">
            <label>Title</label>
            <input type="text" v-model="novoFilme.Title" >
        </div>
        <div class="input-control">
            <label>Year</label>
            <input type="text" v-model="novoFilme.Year" >
        </div>
        <div class="input-control">
            <label>Type</label>
            <input type="text" v-model="novoFilme.Type">
        </div>
         <div class="input-control">
            <label>Poster</label>
            <input type="text" v-model="novoFilme.Poster">
        </div>
        <div class="input-control">
            <label>imdbID</label>
            <input type="text" v-model="novoFilme.imdbID">
        </div>
        <br>
        <button  v-on:click="submitBut" type="submit" class="button">Enviar</button>
    </form>
</div>
</template>
<script>
import axios from 'axios';
export default {
    data (){
        return {
            novoFilme:{
                Title: '',
                Year: '',
                Type: '',
                Poster: '',
                imdbID: ''

            }
        }
    },
    methods:{
       submeterfilme(){
           return axios.post('https://projeto-frontend-default-rtdb.europe-west1.firebasedatabase.app/Search.json', this.novoFilme);
       },
       submitBut: () => {
                alert('Filme introduzido com sucesso!')
            }
    },
    beforeCreate: function(){
        document.body.className = 'admin'
    }
}
</script>
<style scoped>
.container{
    width: auto;
    display: flex;
    justify-content: center;
    height: 100%;
}


.form{
    font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
    color:#06c4d1;
    width: 600px;
    box-sizing: border-box;
    margin: 100px;
    margin-top: 60px;
    padding: 30px;
    text-align: justify;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
}

.button{
    
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #06c4d1;
    background-color: white;
    color: #06c4d1;
    text-decoration: none;
    padding: 10px 30px;
}

.button:hover,
.button:active{
    color: #fff;
    background-color: #06c4d1;
}

.input-control{
    margin: 10px 0;
}

.input-control label {
    display: block;
    font-weight: bold;
    color: #06c4d1;
}

.input-control input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
}
.input-control input:focus {
    background-color: #eee;
    outline: none;
}
</style>