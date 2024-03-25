import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  const products = ref(null);
  let isLoading = false;
  const isLoaded = ref(false);

  function loadData() {
    if (isLoading) return;
    isLoading = true;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        products.value = json;
        isLoading = false;
        isLoaded.value = true;
      })
      .catch((err) => console.log("Failed to Load Data!!!"));
  }

  return { products, loadData, isLoaded };
});
