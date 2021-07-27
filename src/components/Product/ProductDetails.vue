<!-- 
    Modal component to display a product's full details
-->
<template>
    <div class="modal-mask">
        <!-- user can also close modal by clicking outside of the modal container. -->
        <div class="modal-wrapper" @click="$emit('close-modal')">
        <div class="modal-container" @click.stop="">           
            <div class="modal-header">    
                <h3>Product Information</h3>                       
                <CompanyLogo :companyId="companyId" :maxWidth="50" /> 
            </div>
            <h3 class="sales-btn sales-btn-sml">{{productDetails.ItemName}} </h3>    
            <div class="product-image">
                <ProductImage :imageURL="productDetails.PhotoName" :imageWidth="getImageDimensions" :imageHeight="getImageDimensions" />
            </div>

            <div class="details-container">
                <div class="modal-body">
                    <h4>{{productDetails.Description}}</h4>
                </div>
                <div class="modal-body">
                    <h4>Product ID: {{productDetails.ItemID}}</h4>
                </div>             
                <div class="modal-body">
                    <h4>Dimensions: {{productDetails.Dimensions}}</h4>
                </div>
                <div class="modal-body">
                    <h4>Price (USD): ${{formatCurrency}}</h4>
                </div>
            </div>
            
            <div class="modal-footer">
            <slot name="footer">

                <!-- emit @close-modal event on click of close button -->
                <button class="btn modal-button" @click="$emit('close-modal')">
                    Close
                </button>
            </slot>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import ProductImage from './ProductImage'
    import CompanyLogo from '../CompanyLogo'

    export default {
        name: 'ProductDetails',
        props: {
            productDetails: {}
        },
        //we want to display the product image with a greater size here since 
        //emphasis is on single product. Company logo is displayed with smaller settings. 
        components: {
            ProductImage,
            CompanyLogo
        },
        data() {
            //to pass the company ID to CompanyLogo
            return { 
                companyId: this.productDetails.ManufacturerID.toString()
            }
        },
        computed: {
            //Adds missing 0's to product's price
            formatCurrency() {  
                const formatted = JSON.stringify(this.productDetails.PriceLevel1) + ""
                const res = formatted.split(".");     
                if(res.length == 1 || res[1].length < 3) { 
                    return Number(formatted).toFixed(2);
                }
                return this.productDetails.PriceLeve1;
            },

            //if the viewport is below 760px, we want the product image to be smaller
            //so all product details can be accommodated in a mobile setting. 
            getImageDimensions() {
                return visualViewport.width <= 760 ? 150 : 300
            }
        }
    }
</script>
    
<style scoped>
.product-image {
    margin: 40px 0px;
}

.details-container {
    margin-bottom: 40px;
    padding: 0px 64px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 700px;
  height: auto;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: auto;
    height: 75px;
    align-items: flex-start;
}

.modal-header h3 {
    margin-top: 10px;
}

h3.sales-btn.sales-btn-sml {
    font-size: 20px;
    margin-top: inherit;
}

.modal-header-left {
    text-align: left;
    line-height: 1.5;
}

.modal-header img {
    margin-bottom: inherit;
}

.modal-body {
  margin: 20px 0;
}

.modal-button {
    display: flex;
    position: relative;
    bottom: 10px;
    margin-left: auto;
    background-color: #2c3e50;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 768px){
    .modal-container {
        margin: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
        position: fixed;
        width: 100vw;
    }

    h3.sales-btn.sales-btn-sml {
        font-size: inherit;
    }

    .details-container {
        padding: 0;
    }

    .modal-footer {
        position: absolute;
        bottom: inherit;
        right: inherit;
        padding: inherit;
    }

    .product-image {
        margin-top: 25px;
        margin-bottom: 20px;
    }
}

@media (max-height: 768px){
    .modal-container {
        margin: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
        position: fixed;
        width: 100vw;
    }

    .modal-footer {
        position: absolute;
        bottom: inherit;
        right: inherit;
        padding: inherit;
    }
}




</style>