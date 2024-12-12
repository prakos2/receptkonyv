import { ref, reactive } from "vue";
export const store = reactive({
    recipes: ref([]),
    searchFilter: {
        title: ref(""),
        difficulty: ref(""),
        sort: ref(""),
    },
    addRecipe(recipe) {
        this.recipes.push(recipe);
    },
})