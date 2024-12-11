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
      <h3 class="card-title mb-3 textHoverEffect" :data-hover="props.recipe.getTitle()">{{ props.recipe.getTitle() }}</h3>
      <h6 class="card-subtitle mb-4 text-body-secondary">
        Elkészítési idő: {{ props.recipe.getTime() }} perc
      </h6>
      <!-- Flex container for vertical alignment -->
      <div class="d-flex flex-column align-items-start">
        <!-- Badge -->
        <p
            class="text-white text-center border rounded px-2 py-1 mb-2 diff"
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
/* hover effect */
.card {
  transition: all 0.3s;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to top , rgba(0,128,0,0.5), rgba(255,255,255,1));



}
.card:hover .diff {
  filter: brightness(150%);
}
</style>