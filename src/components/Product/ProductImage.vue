<!-- Component for rendering product images according to width, height, and URL specifications -->
<template>
    <img class="img-responsive" :src="generateImageURL" >  
</template>

<script>
    export default {
        name: 'ProductImage',
        props: {
            imageWidth: Number,
            imageHeight: Number,
            imageURL: String
        },
        computed: {
            //generate image URL according to URL and size specifications
            generateImageURL() {
                //if no size specifications, return base URL
                if(!this.imageWidth && !this.imageHeight) {
                    return this.imageURL;
                }

                //if no height specification, return URL with imageWidth as query param
                if(this.imageWidth && !this.imageHeight) {
                    return this.imageURL + `?=&maxwidth=${this.imageWidth}`
                }

                //if no height specification, return URL with imageHeight as query param
                if(this.imageHeight && !this.imageWidth) {
                    return this.imageURL + `?=&maxheight=${this.imageHeight}`
                }

                //otherwise, return URL with both width and height as query params
                return this.imageURL + `?=&maxwidth=${this.imageWidth}&maxheight=${this.imageHeight}`
            },
        }
    }
</script> 

<style scoped>
    .img-responsive {
        max-width: 100%;
        height: auto;
    }
</style>