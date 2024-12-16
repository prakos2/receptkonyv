<script setup>

import Recipe from "@/class/Recipe";
import {badges} from "@/data/badges.js";
import {store} from "@/store/store";
import {ref, onMounted} from "vue";

let name = ref("");
let time = ref("");
let difficulty = ref("");
let img = ref("");
const formRef = ref(null);
let modal;
onMounted(() => {
  modal = new bootstrap.Modal(document.getElementById('newRecipeModal'));
});

const save = () => {
  if (formRef.value.checkValidity()) {
    try {
      store.addRecipe(new Recipe(store.recipes.length, name.value, time.value, difficulty.value, img.value));
      formRef.value.reset();
      modal.hide();
    } catch (e) {
      console.error(e);
    }
  } else {
    formRef.value.classList.add('was-validated');
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
        <form ref="formRef" class="modal-body needs-validation" novalidate>
          <div class="col g-2">
            <div class="col-md mb-3">
              <div class="form-floating">
                <input v-model="name" type="text" class="form-control" id="name" placeholder="Recept neve" required>
                <label for="name">Recept neve</label>
                <div class="invalid-feedback">Kérjük, adja meg a recept nevét.</div>
              </div>
            </div>
            <div class="col-md mb-3">
              <div class="form-floating">
                <input v-model="time" type="number" class="form-control" id="time" placeholder="Elkészítési idő" required>
                <label for="time">Elkészítési idő</label>
                <div class="invalid-feedback">Kérjük, adja meg az elkészítési időt.</div>
              </div>
            </div>
            <div class="col-md mb-3">
              <div class="form-floating">
                <select class="form-select" id="difficulty" v-model="difficulty" required>
                  <option v-for="key in Object.keys(badges)" :value="key">{{badges[key].name}}</option>
                </select>
                <label for="difficulty">Válassz nehézséget</label>
                <div class="invalid-feedback">Kérjük, válasszon nehézséget.</div>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <input v-model="img" type="url" class="form-control" id="time" placeholder="Kép feltöltése" required>
                <label for="img">Kép feltöltése</label>
                <div class="invalid-feedback">Kérjük, adjon meg egy képet.</div>
              </div>
            </div>
          </div>
        </form>
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