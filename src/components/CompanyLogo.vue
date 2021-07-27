<template>
    <img :src="generateImageURL">  
</template>

<script>
    export default {
        name: 'CompanyLogo',
        props: {
            maxWidth: Number,
            companyId: String
        },
        computed: {
            generateImageURL() {
                if(this.maxWidth) {
                    return `http://images.repzio.com/productimages/${this.companyId}/logo${this.companyId}_lg.jpg?=&maxwidth=${this.maxWidth}`
                }
                return `http://images.repzio.com/productimages/${this.companyId}/logo${this.companyId}_lg.jpg`
            }
        }
    }
</script> 