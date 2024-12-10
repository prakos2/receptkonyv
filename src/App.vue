<script setup>
import { ref } from 'vue'
import RecipeCard from "@/components/RecipeCard.vue";
import Search from "@/components/Search.vue";

// init store
import { recipes } from './data/recipes';
import { store } from './store/store';
import Recipe from './class/Recipe';
recipes.map(recipe => store.addRecipe(new Recipe(recipe.id, recipe.title, recipe.time, recipe.difficulty, recipe.img)));
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg nav-pills">
      <div class="container-fluid">
        <a class="navbar-brand">Receptkönyv</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Receptek</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Új recept</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kedvencek</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <Search/>
    <div class="container">
      <div class="row">
        <div class="col-4 pe-5 pb-5" v-for="recipe in store.getRecipes()">
          <RecipeCard :recipe="recipe" :v-if="!store.searchFilter.getIds().includes(recipe.getId())" v-for="recipe in store.getRecipes()"/>
        </div>
      </div>
    </div>
  </main>
  <footer>
  </footer>
</template>

<style scoped>
</style>
