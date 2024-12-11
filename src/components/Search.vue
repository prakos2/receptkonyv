<script setup>
  import {badges} from "@/data/badges.js";
</script>

<template>
    <div class="col-12 mb-3">
      <div class="row">
        <div class="col-lg-6 col-sm-12 mb-3 mb-md-3 mb-lg-0">
          <input type="search" class="form-control" placeholder="Keress receptet...">
        </div>
        <div class="col-lg-3 col-sm-12 mb-3 mb-md-3 mb-lg-0">
          <select class="form-select">
            <option selected>Minden nehézség</option>
            <option v-for="key in Object.keys(badges)" :value="key">{{badges[key].name}}</option>
          </select>
        </div>
        <div class="col-lg-3 col-sm-12 mb-3 mb-md-3 mb-lg-0">
          <select class="form-select">
            <option selected>Elkészítési idő szerint</option>
            <option value="1">Növekvő sorrend</option>
            <option value="2">Csökkenő sorrend</option>
          </select>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>