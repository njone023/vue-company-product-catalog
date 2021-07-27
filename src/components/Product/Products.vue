<!--
    Component to display all Products as a grid, each being a Product component. 
-->
<template>
    <div class="cards">
        <div :key="product.ItemID" v-for="product in productData">
            <!-- render each Product dynamically, passing in current product as prop -->
            <Product :product="product" />
        </div>
    </div>
    
</template>

<script>

import inject from 'vue'
import Product from './Product'

export default {
    name: 'Products',   
    inject: ['productData'],    //receive product data provided from App.vue
    components: {
        Product,           
    },
}
</script>

<style scoped>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: auto;
        grid-gap: 0.5rem;
    }
</style>