<!-- Home page for app that contains Products, the products list displayed -->
<template>
  <Products />
</template>

<script>
import Products from '../components/Product/Products';

export default {
  name: 'Home',
  inheritAttrs: false,
  components: {
    Products
  }
}
</script>

