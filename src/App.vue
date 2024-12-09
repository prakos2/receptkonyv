<script setup>
import { ref } from 'vue'
import Card from "@/components/RecipeCard.vue";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Receptkönyv</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="">Receptek</a>
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
    <Card />
  </main>
  <footer>
  </footer>
</template>

<style scoped>
</style>
