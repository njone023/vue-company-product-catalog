<!-- 
    Component for rendering a single product as a card, from parent component, Products
-->
<template>
    <div class="product" @click="showProductDetails(product)">
        <div class="product-img-container" >
            <ProductImage :imageURL="product.PhotoName" :imageWidth="175" :imageHeight="175" />
        </div>     
        <div class="product-info-container">
            <h3>{{ product.ItemName }}</h3>
            <i class="fas fa-info"></i>
        </div>   
    </div>
    <!-- product details modal is opened when showModal becomes true, set to false when
         @close-modal event is fired from product details component.  -->
    <transition name="modal">
        <ProductDetails 
            :productDetails="currentProduct"
            v-if="showModal" 
            @close-modal="showModal = false"
        />
    </transition>  
</template>

<script>
    import ProductImage from './ProductImage'
    import ProductDetails from './ProductDetails'

    export default {
        name: 'Product',
        props: {
            product: {}
        },
        components: {
            ProductImage,
            ProductDetails
        },
        data() {
            return {
                showModal: false,
                currentProduct: {}      //is set when product card is clicked to pass to product details
            }
        },
        methods: {
            //when user clicks on product card, open modal and set the 
            //product to be displayed as component data to pass into product details. 
            showProductDetails( product ) {
                this.showModal = true
                this.currentProduct = product
            }
        }
    }
</script>

<style scoped>

i {
  display: flex;
  margin-left: auto;
  align-items: center;
}

.product {
    height: 280px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    cursor: pointer;
    box-shadow: 0 0px 30px rgb(0 0 0 / 15%);
    align-items: center;
}

.product h3 {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
    line-height: 25px;
    font-size: 18px;
}
.product .product-info-container {
    padding-top: 15px;
    display: flex;
    align-items: center;
    min-height: 72px;
    margin-top: auto;
    width: 100%;
}

.product-img-container {
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    align-items: center;
}

</style>