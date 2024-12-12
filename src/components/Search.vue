<script setup>
  import { ref } from "vue";
  import {badges} from "@/data/badges.js";
  import { store } from "@/store/store";

  let searchString = ref("");
  let searchDifficulty = ref("");
  let sort = ref("");
</script>

<template>
    <div class="col-12 mb-3">
      <div class="row">
        <div class="col-lg-6 col-sm-12 mb-3 mb-md-3 mb-lg-0">
            <input type="search" class="form-control" placeholder="Keress receptet..." v-model="searchString" @input="store.searchFilter.title = searchString">
        </div>
        <div class="col-lg-3 col-sm-12 mb-3 mb-md-3 mb-lg-0">
          <select class="form-select" v-model="searchDifficulty" @change="store.searchFilter.difficulty = searchDifficulty">
            <option selected value="">Minden nehézség</option>
            <option v-for="key in Object.keys(badges)" :value="key">{{badges[key].name}}</option>
          </select>
        </div>
        <div class="col-lg-3 col-sm-12 mb-3 mb-md-3 mb-lg-0">
          <select class="form-select" v-model="sort" @change="store.searchFilter.sort = sort">
            <option selected value="">Elkészítési idő szerint</option>
            <option value="1">Növekvő sorrend</option>
            <option value="2">Csökkenő sorrend</option>
          </select>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>