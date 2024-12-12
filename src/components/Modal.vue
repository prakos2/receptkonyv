<script setup>
import Recipe from "@/class/Recipe";
import {badges} from "@/data/badges.js";
import { store } from "@/store/store";
import { ref } from "vue";

let name = ref("");
let time = ref(0);
let difficulty = ref("");

const save = () => {
  try {
    store.addRecipe(new Recipe(store.recipes.length, name.value, time.value, difficulty.value, "https://placeholder.co/200x600"));
  } catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <div class="modal" tabindex="-1" id="newRecipeModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Új recept</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="col g-2">
            <div class="col-md mb-3">
              <div class="form-floating">
                <input v-model="name" type="text" class="form-control" id="name" placeholder="Recept neve">
                <label for="name">Recept neve</label>
              </div>
            </div>
            <div class="col-md mb-3">
              <div class="form-floating">
                <input v-model="time" type="number" class="form-control" id="time" placeholder="Elkészítési idő">
                <label for="time">Elkészítési idő</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <select class="form-select" id="difficulty" v-model="difficulty">
                  <option v-for="key in Object.keys(badges)" :value="key">{{badges[key].name}}</option>
                </select>
                <label for="difficulty">Válassz nehézséget</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Mégse</button>
          <button type="submit" class="btn btn-primary" @click="save">Mentés</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>