import CardSearchFilter from "@/class/CardSearchFilter";
import { reactive } from "vue";
export const store = reactive({
    recipes: [],
    searchFilter: new CardSearchFilter(),
    addRecipe(recipe) {
        this.recipes.push(recipe);
    },
    getRecipes() {
        return this.recipes;
    }
})