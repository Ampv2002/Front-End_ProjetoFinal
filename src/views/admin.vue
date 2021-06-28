<template>

<div class="container">
    
    <form @submit.prevent="submeterlivro" class="form">
    <h2>Adicionar Livro</h2>
    <br>
        <div class="input-control">
            <label>Title</label>
            <input type="text" v-model="novoLivro.Titulo" >
        </div>
        <div class="input-control">
            <label>Year</label>
            <input type="text" v-model="novoLivro.Ano" >
        </div>
        <div class="input-control">
            <label>Genres</label>
            <input type="text" v-model="novoLivro.Genres">
        </div>
         <div class="input-control">
            <label>Cover</label>
            <input type="text" v-model="novoLivro.Capa">
        </div>
        <div class="input-control">
            <label>Goodreads</label>
            <input type="text" v-model="novoLivro.Goodreads">
        </div>
        <div class="input-control">
            <label>Price</label>
            <input type="text" v-model="novoLivro.Preco">
        </div>
        <div class="input-control">
            <label>Author</label>
            <input type="text" v-model="novoLivro.Author">
        </div>
        <div class="input-control">
            <label>Synopsis</label>
            <input type="text" v-model="novoLivro.Synopsis">
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
            novoLivro:{
                Titulo: '',
                Ano: '',
                Genres: '',
                Capa: '',
                Goodreads: '',
                Preco: '',
                Author: '',
                Synopsis: ''

            }
        }
    },
    methods:{
       submeterlivro(){
           return axios.post('https://projeto-f2622-default-rtdb.europe-west1.firebasedatabase.app/livro.json', this.novoLivro);
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