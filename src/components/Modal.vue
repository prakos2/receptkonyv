<script setup>

import {badges} from "@/data/badges.js";
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
                <input type="text" class="form-control" id="name" placeholder="Recept neve">
                <label for="name">Recept neve</label>
              </div>
            </div>
            <div class="col-md mb-3">
              <div class="form-floating">
                <input type="number" class="form-control" id="time" placeholder="Elkészítési idő">
                <label for="time">Elkészítési idő</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <select class="form-select" id="difficulty">
                  <option v-for="key in Object.keys(badges)" :value="key">{{badges[key].name}}</option>
                </select>
                <label for="difficulty">Válassz nehézséget</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Mégse</button>
          <button type="submit" class="btn btn-primary">Mentés</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>