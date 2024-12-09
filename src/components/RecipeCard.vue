<script setup>
import Recipe from '@/class/Recipe';
import { badgeColors } from '@/data/badgeColors';

const props = defineProps({
  recipe: Recipe
});
</script>

<template>
  <div class="card" style="width: 301px;">
    <img src="../assets/palacsinta.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title mb-3">{{ recipe.getTitle() }}</h3>
      <h6 class="card-subtitle mb-4 text-body-secondary">Elkészítési idő: {{ recipe.getTime() }} perc</h6>
      <p class="card-text text-white w-25 mb-4 text-center bg-warning border rounded">könnyű</p>
      <a href="#" class="btn btn-primary">Részletek</a>
    </div>
  </div>
</template>

<style scoped>
  img{
    height: 200px;
    width: 300px;
    object-fit: cover;
  }
</style>