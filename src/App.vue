<script setup>
import {computed} from 'vue'
import RecipeCard from "@/components/RecipeCard.vue";
import Search from "@/components/Search.vue";

// init store
import {recipes} from './data/recipes';
import {store} from './store/store';
import Recipe from './class/Recipe';
import Modal from "@/components/Modal.vue";

recipes.map(recipe => store.addRecipe(new Recipe(recipe.id, recipe.title, recipe.time, recipe.difficulty, recipe.img)));

let filteredRecipes = computed(() => {
  let recipes = store.recipes.filter((recipe) => {
    const matchesSearch = store.searchFilter.title != "" ? recipe.getTitle().toLowerCase().includes(store.searchFilter.title.toLowerCase()) : true;
    const matchesDifficulty = store.searchFilter.difficulty != "" ? recipe.getDifficulty() == store.searchFilter.difficulty : true;
    return matchesSearch && matchesDifficulty;
  })
  return recipes.sort((a, b) => {
    switch(store.searchFilter.sort) {
      case "1":
        return a.getTime() - b.getTime();
      case "2":
        return b.getTime() - a.getTime();
      default:
        return 0;
    }
  })
})
</script>

<template>
  <Modal/>
  <div class="container d-flex flex-column align-items-center justify-content-center">
    <div class="row w-100 ps-lg-5 ms-lg-5">
      <header>
        <nav class="navbar navbar-expand-lg nav-pills ps-lg-4 ms-lg-1">
          <div class="container-fluid">
            <a class="navbar-brand">Receptkönyv</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Receptek</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" data-bs-toggle="modal" data-bs-target="#newRecipeModal">Új recept</a>
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
        <div class="container d-flex flex-column align-items-center justify-content-center">
          <div class="row w-100 p-3">
            <Search/>
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center pb-5"
                     v-for="recipe in filteredRecipes" v-if="filteredRecipes.length > 0">
                  <RecipeCard :recipe="recipe"/>
                </div>
                <div class="col text-center" v-else>
                  <h1 class="p-5">Nincs találat!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <footer>
  </footer>
</template>

<style scoped>
</style>