import { reactive } from "vue";
export const store = reactive({
    recipes: [],
    addRecipe(recipe) {
        this.recipes.push(recipe);
    },
    getRecipes() {
        return this.recipes;
    }
})