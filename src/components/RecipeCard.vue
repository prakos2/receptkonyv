<script setup>
import Recipe from '@/class/Recipe';
import {badges} from '@/data/badges';

const props = defineProps({
  recipe: Recipe
});

</script>

<template>
  <div class="card" style="width: 600px;">
    <img :src="props.recipe.getImgURL()" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h3 class="card-title mb-3">{{ props.recipe.getTitle() }}</h3>
      <h6 class="card-subtitle mb-4 text-body-secondary">
        Elkészítési idő: {{ props.recipe.getTime() }} perc
      </h6>
      <!-- Flex container for vertical alignment -->
      <div class="d-flex flex-column align-items-start">
        <!-- Badge -->
        <p
            class="btn text-white text-center border rounded px-2 py-1 mb-2"
            :class="badges[props.recipe.getDifficulty()].class"
        >
          {{ badges[props.recipe.getDifficulty()].name }}
        </p>
        <!-- Button -->
        <a href="#" class="btn btn-primary">Részletek</a>
      </div>
    </div>
  </div>
</template>



<style scoped>
img {
  height: 200px;
  width: 599px;
  object-fit: cover;
}
</style>